const keyEnglish = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'ShiftLeft', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'ShiftRight',
    'Ctrl', 'Alt', 'Win', 'Space', 'Alt', 'Ctrl', '&#9668', '&#9660', '&#9658',
];

const keyShiftEnglish = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
    'ShiftLeft', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#9650', 'ShiftRight',
    'Ctrl', 'Alt', 'Win', 'Space', 'Alt', 'Ctrl', '&#9668', '&#9660', '&#9658',
];

const keyRussian = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'ShiftLeft', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'ShiftRight',
    'Ctrl', 'Alt', 'Win', 'Space', 'Alt', 'Ctrl', '&#9668', '&#9660', '&#9658',
];

const keyShiftRussian = [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'ShiftLeft', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650', 'ShiftRight',
    'Ctrl', 'Alt', 'Win', 'Space', 'Alt', 'Ctrl', '&#9668', '&#9660', '&#9658',
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
        button.classList.add('button');

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
                button.classList.add('key_shiftleft');
                button.innerHTML = 'Shift';
                break;
            case 'ShiftRight':
                button.classList.add('key_shiftright');
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