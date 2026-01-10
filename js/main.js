document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.js-hamburger');
  
  hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
});
