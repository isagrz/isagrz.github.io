function greetAndColor() {
  const name = document.getElementById('nameInput').value;
  const color = document.getElementById('colorInput').value;

  document.body.style.backgroundColor = color;
  document.getElementById('message').textContent = `Hello, ${name}! Nice choice of color.`;
}
