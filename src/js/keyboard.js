import { keyEnglish, keyRussian, keyCodes } from './dictionary.js';

let language = [];
if (localStorage.language === 'rus') {
  language = keyRussian;
} else {
  language = keyEnglish;
}

function createFragment() {
  const fragment = document.createDocumentFragment();
  language.forEach((key, index) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('button');
    button.setAttribute('id', keyCodes[index]);
    switch (key) {
      case 'Backspace':
        button.classList.add('key_backspace');
        button.innerHTML = 'Backspace';
        break;
      case 'Enter':
        button.classList.add('key_enter');
        button.innerText = 'Enter';
        break;
      case 'ShiftLeft':
        button.classList.add(
          'key_shiftleft',
          'keyshift',
        );
        button.innerHTML = 'Shift';
        break;
      case 'ShiftRight':
        button.classList.add(
          'key_shiftright',
          'keyshift',
        );
        button.innerHTML = 'Shift';
        break;
      case 'Tab':
        button.classList.add('key_tab');
        button.innerHTML = 'Tab';
        break;
      case 'CapsLock':
        button.classList.add('key_capslock');
        button.innerHTML = 'CapsLock';
        break;
      case 'Space':
        button.classList.add('key_space');
        button.innerHTML = ' ';
        break;
      case 'Win':
        button.classList.add('key_win');
        button.innerHTML = 'Win';
        break;
      case 'Ctrl':
        button.classList.add('key_ctrl');
        button.innerHTML = 'Ctrl';
        break;
      case 'Alt':
        button.classList.add('key_alt');
        button.innerHTML = 'Alt';
        break;
      case 'Delete':
        button.classList.add('key_delete');
        button.innerHTML = 'Delete';
        break;
      default:
        button.classList.add('key_general');
        button.innerHTML = key;
        break;
    }
    fragment.appendChild(button);
  });
  return fragment;
}

export default function keyboardInit() {
  const page = document.querySelector('body');
  const wrapper = document.createElement('div');
  page.append(wrapper);
  wrapper.classList.add('wrapper');

  const textarea = document.createElement('textarea');
  wrapper.append(textarea);
  textarea.classList.add('textarea');
  textarea.setAttribute('cols', 100);
  textarea.setAttribute('rows', 10);
  textarea.focus();

  const container = document.createElement('div');
  wrapper.append(container);
  container.classList.add('container');

  const description = document.createElement('div');
  wrapper.append(description);
  description.classList.add('description');
  description.innerHTML = 'Создано для ОС Windows. Переключение языков Shift (Left) + Alt (Left). '
        + '\n Ввод с клавиатуры работает, если язык в системе и совпадает с языком на виртуальной клавиатуре';

  container.append(createFragment());
}
