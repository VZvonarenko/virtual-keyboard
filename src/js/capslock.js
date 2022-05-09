import switcher from './switcher.js';

export default function capslock() {
  const letters = document.querySelectorAll('.key_general');
  const caps = document.querySelector('.key_capslock');
  caps.addEventListener('click', () => {
    caps.classList.toggle('click');
    caps.classList.toggle('capslock_on');
    caps.classList.toggle('key_click');
    switcher(letters);
    localStorage.caps = caps.className;
  });
}
