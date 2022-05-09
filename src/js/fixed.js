import { bufferText } from './inputTextMouse.js';

export default function fixed() {
  const capslock = document.querySelector('.key_capslock');
  const letters = document.querySelectorAll('.key_general');
  const textarea = document.createElement('textarea');
  if (capslock.classList.contains('capslock_on')) {
    letters.forEach((element) => {
      element.innerHTML = element.innerHTML.toUpperCase();
    });
  }

  if (localStorage.buffer) {
    const str = localStorage.buffer.split(',');
    str.forEach((element) => bufferText.push(element));
    localStorage.text = bufferText.join('');
    textarea.innerHTML = localStorage.text;
  }
}
