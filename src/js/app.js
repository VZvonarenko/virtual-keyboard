import keyboardInit from './keyboard.js';
import capslock from './capslock.js';
import inputTextKeyboard from './inputTextKeyboard.js';
import inputTextMouse from './inputTextMouse.js';
import pressbutton from './pressbutton.js';
import shift from './shift.js';
import changelanguage from './changelanguage.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  capslock();
  inputTextKeyboard();
  inputTextMouse();
  pressbutton();
  shift();
  changelanguage();
});

/*
Не работает:
подсветка нажатий мыши
DELETE с мышки
TAB с клавиатуры

добавить анимацию нажатия кнопок
стрелочки с мыши

*/
