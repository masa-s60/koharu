document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.c-hamburger');
  const hamburgerNav = document.querySelector('.c-nav__header');
  const overlay = document.querySelector('.c-overlay');
  
  hamburgerMenu.addEventListener('click', () => {
    const isOpenHamburgerMenu = hamburgerMenu.classList.toggle('is-open');
    hamburgerNav.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
    hamburgerMenu.setAttribute('aria-expanded', isOpenHamburgerMenu ? 'true' : 'false');
  });
});
