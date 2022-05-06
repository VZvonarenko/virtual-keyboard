function toggleCase(letters) {
  const caps = document.querySelector('.key_capslock');

  if (caps.classList.contains('capslock_on')) {
    letters.forEach((item) => {
      item.innerText = item.innerText.toUpperCase();
    });
  } else {
    letters.forEach((item) => {
      item.innerText = item.innerText.toLowerCase();
    });
  }
}

export default function capslock() {
  const letters = document.querySelectorAll('.key_general');

  const caps = document.querySelector('.key_capslock');
  caps.addEventListener('click', () => {
    caps.classList.toggle('click');
    caps.classList.toggle('capslock_on');
    caps.classList.toggle('key_click');
    toggleCase(letters);
    localStorage.caps = caps.className;
  });
}
