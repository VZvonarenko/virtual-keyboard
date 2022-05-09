export default function changelanguage() {
  const pressed = new Set();

  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    pressed.add(event.code);
    if (pressed.has('ShiftLeft') && pressed.has('ControlLeft')) {
      localStorage.language === 'en'
        ? localStorage.language = 'rus'
        : localStorage.language = 'en';
      document.location.reload();
      pressed.clear();
    }
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
  // document.location.reload();
}
