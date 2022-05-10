export default function view(bufferText, textareafield) {
  localStorage.buffer = bufferText;
  localStorage.text = bufferText.join('');
  textareafield.innerHTML = localStorage.text;
}
