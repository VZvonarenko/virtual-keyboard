export default function pressbutton() {
  window.addEventListener('keydown', (event) => {
    const button = document.getElementById(event.code);
    if (button) {
      button.classList.add('key_click');
    }
  });
  window.addEventListener('keyup', (event) => {
    const button = document.getElementById(event.code);
    if (button) {
      button.classList.remove('key_click');
    }
  });
}
