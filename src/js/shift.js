import switcher from './switcher.js';
import {
  keyShiftEnglish,
  keyShiftRussian,
  keyEnglish,
  keyRussian,
} from './dictionary.js';

export default function shift() {
  const capslock = document.querySelector('.key_capslock');
  const keyshift = document.querySelectorAll('.keyshift');
  const buttons = document.querySelectorAll('.key_general');
  const buttonsAll = document.querySelectorAll('.button');

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      if (localStorage.language === 'rus') {
        keyRussian.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      } else {
        keyEnglish.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      }
      if (!(event.getModifierState('CapsLock')) && !(capslock.classList.contains('click'))) {
        capslock.classList.remove('capslock_on');
        switcher(buttons);
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
      if (localStorage.language === 'rus') {
        keyShiftRussian.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      } else {
        keyShiftEnglish.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      }
      if (!event.getModifierState('CapsLock')) {
        capslock.classList.add('capslock_on');
        switcher(buttons);
      }
    }
  });

  keyshift.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
      if (localStorage.language === 'rus') {
        keyShiftRussian.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      } else {
        keyShiftEnglish.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      }
      if (!event.getModifierState('CapsLock')) {
        capslock.classList.add('capslock_on');
        switcher(buttons);
      }
      element.classList.add('key_click');
    });

    element.addEventListener('mouseup', (event) => {
      if (localStorage.language === 'rus') {
        keyRussian.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      } else {
        keyEnglish.forEach((item, index) => {
          switch (item) {
            case 'ShiftLeft':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'ShiftRight':
              buttonsAll[index].innerHTML = 'Shift';
              break;
            case 'Space':
              buttonsAll[index].innerHTML = ' ';
              break;
            default:
              buttonsAll[index].innerHTML = item;
              break;
          }
        });
      }
      if (!(event.getModifierState('CapsLock')) && !(capslock.classList.contains('click'))) {
        capslock.classList.remove('capslock_on');
        switcher(buttons);
      }
      element.classList.remove('key_click');
    });
  });
}
