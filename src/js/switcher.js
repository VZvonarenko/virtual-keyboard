export default function switcher(letters) {
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
