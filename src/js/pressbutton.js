export default function pressbutton() {
  const buttonsAll = document.querySelectorAll('.button');
  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    buttonsAll.forEach((element) => {
      if (element.innerHTML === 'Ctrl' && event.key === 'Control') {
        element.classList.add('key_click');
      } else if (element.innerHTML === event.key) {
        element.classList.add('key_click');
      }
    });
  });

  window.addEventListener('keyup', () => {
    buttonsAll.forEach((element) => {
      element.classList.remove('key_click');
    });
  });
}
