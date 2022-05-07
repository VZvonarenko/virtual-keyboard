import keyboardInit from './keyboard.js';
import capslock from './capslock.js';
import inputTextKeyboard from './inputTextKeyboard.js';
import inputTextMouse from './inputTextMouse.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  capslock();
  inputTextKeyboard();
  inputTextMouse();
});
