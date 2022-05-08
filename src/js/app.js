import keyboardInit from './keyboard.js';
import capslock from './capslock.js';
import inputTextKeyboard from './inputTextKeyboard.js';
import inputTextMouse from './inputTextMouse.js';
import pressbutton from './pressbutton.js';
import shift from './shift.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  capslock();
  inputTextKeyboard();
  inputTextMouse();
  pressbutton();
  shift();
});
