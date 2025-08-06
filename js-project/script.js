document.querySelectorAll('.digit').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.position = 'absolute';
    input.style.top = Math.random() * window.innerHeight + 'px';
    input.style.left = Math.random() * window.innerWidth + 'px';
  });
});

document.getElementById('phone-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const error = document.querySelector('.error');
  error.classList.remove('hidden');
  error.textContent = "Error: That number seems fake. Try again.";

  // scramble inputs
  document.querySelectorAll('.digit').forEach(input => {
    input.value = '';
    input.style.top = Math.random() * window.innerHeight + 'px';
    input.style.left = Math.random() * window.innerWidth + 'px';
  });
});
