
var navToggleBtn, navCloseBtn, mobileNavBar, year;


init();

function init() {
  let currentYear = new Date().getFullYear();
  navToggleBtn = document.getElementById('toggle-button');
  navCloseBtn = document.getElementById('mobnav-close-btn');//for closing mobile nav
  mobileNavBar = document.querySelector('.mobile-nav');
  year = document.querySelector('.year');

  year.textContent = currentYear;
  registerEvents();
}

function registerEvents() {
  navToggleBtn.addEventListener('click', () => mobileNavBar.style.display = "block");
  navCloseBtn.addEventListener('click', () => mobileNavBar.style.display = "none");
}
