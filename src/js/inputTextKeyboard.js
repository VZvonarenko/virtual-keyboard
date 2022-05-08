import { keyEnglish, keyRussian, keyShiftRussian } from './dictionary.js';
import { bufferText } from './inputTextMouse.js';
import switcher from './switcher.js';
import view from './view.js';

export default function inputTextKeyboard() {
  const textareafield = document.querySelector('.textarea');
  const capslock = document.querySelector('.key_capslock');
  const letters = document.querySelectorAll('.key_generals');
  const buttons = document.querySelectorAll('.button');
  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Shift':
        if (event.getModifierState('CapsLock')) {
          break;
        }
        capslock.classList.add('capslock_on');
        switcher(letters);
        break;
      case 'CapsLock':
        if (event.getModifierState('CapsLock')) {
          capslock.classList.remove('capslock_on');
          switcher(letters);
          break;
        } else {
          capslock.classList.add('capslock_on');
          switcher(letters);
          localStorage.capslock = capslock.className;
          break;
        }
      case 'Enter':
        bufferText.push('\n');
        break;

      case '':
        bufferText.push(' ');
        break;

      case 'Backspace':
        bufferText.splice(bufferText.length - 1, 1);
        view(bufferText, textareafield);
        break;
      case 'ArrowRight':
        bufferText.push('&#9658');
        view(bufferText, textareafield);
        break;

      case 'ArrowLeft':
        bufferText.push('&#9668');
        view(bufferText, textareafield);
        break;

      case 'ArrowUp':
        bufferText.push('&#9650');
        view(bufferText, textareafield);
        break;

      case 'ArrowDown':
        bufferText.push('&#9660');
        view(bufferText, textareafield);
        break;
      case 'Control':
        if (localStorage.language === 'en') {
          localStorage.language = 'rus';
        } else {
          localStorage.language = 'en';
        }
        document.location.reload();
        break;
      case 'F5':
        break;

      case 'Escape':
        break;

      case 'Alt':
        break;

      default:
        if (localStorage.language === 'rus') {
          keyRussian.forEach((item) => {
            if (item === event.key.toLowerCase()) {
              const index = keyRussian.indexOf(item);
              bufferText.push(keyRussian[index]);
              buttons[index].classList.add('key_click');
            }
          });
          if (event.code === 'Space') {
            bufferText.push(' ');
          }
        } else {
          bufferText.push(event.key);
        }
        view(bufferText, textareafield);
        break;
    }
  });

  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'Shift':
        if (event.getModifierState('CapsLock')) {
          break;
        } else {
          capslock.classList.remove('capslock_on');
          switcher(letters);
        }
        break;

      default:
        buttons.forEach((item) => {
          item.classList.remove('key_click');
        });
        break;
    }
  });
}
