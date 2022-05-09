export const bufferText = [];

export default function inputTextMouse() {
  const textareafield = document.querySelector('.textarea');
  document.body.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('key_general')) {
      bufferText.push(event.target.innerText);
    }
    if (event.target.classList.contains('key_space')) {
      bufferText.push(' ');
    }
    if (event.target.classList.contains('key_enter')) {
      bufferText.push('\n');
      textareafield.innerHTML = ('br');
    }
    if (event.target.classList.contains('key_tab')) {
      bufferText.push('   ');
    }
    if (event.target.classList.contains('key_backspace')) {
      bufferText.splice(bufferText.length - 1, 1);
    }
    localStorage.buffer = bufferText;
    localStorage.text = bufferText.join('');
    textareafield.innerHTML = localStorage.text;
  });
}
