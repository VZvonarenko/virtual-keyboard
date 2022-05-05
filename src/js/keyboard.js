const keyEnglish = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
  'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl',
];

const keyShiftEnglish = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ', '>', '?', 'Shift',
  'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl',
];

const keyRussian = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
  'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl',
];

const keyShiftRussian = [
  'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'Shift',
  'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl',
];

const functionalKeys = [
  'Escape', 'F1', 'F2', 'F3', 'F4', 'F6', 'F7', 'F8',
  'F9', 'F10', 'F11', 'F12', 'Insert', 'Home', 'PageUp',
  'PageDown', 'End', 'Delete', 'NumLock',
];

let language = [];

if (localStorage.language === 'rus') {
  language = keyRussian;
} else {
  language = keyEnglish;
}

function createFragment() {
  const fragment = document.createDocumentFragment();
  language.forEach((key) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('keyboard_key');

    switch (key) {
      case 'Backspace':
        button.classList.add('key_backspace');
        button.innerHTML = 'Backspace';
        break;
      case 'Enter':
        button.classList.add('key_enter');
        button.innerText = 'Enter';
        break;
      case 'Shift':
        button.classList.add('key_shift');
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
      case 'Ctrl':
        button.classList.add('key_ctrl');
        button.innerHTML = 'Ctrl';
        break;
      case 'Alt':
        button.classList.add('key_alt');
        button.innerHTML = 'Alt';
        break;
      default:
        button.innerHTML = key;
        button.classList.add('button_key');
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
  textarea.setAttribute('id', 'textarea');
  textarea.setAttribute('autofocus', 'true');

  const container = document.createElement('div');
  wrapper.append(container);
  container.classList.add('container');

  const description = document.createElement('div');
  wrapper.append(description);
  description.classList.add('description');
  description.innerHTML = 'Создано для ОС Windows. Переключение языков !!! CTRL !!!';

  container.append(createFragment());
}
