var mainMenu = document.querySelector('.main-menu');
var mainMenuToggle = document.querySelector('.main-menu__toggle');
var pageHeader = document.querySelector('.page-header__wrapper');

pageHeader.classList.remove('page-header__wrapper--opened');
mainMenu.classList.remove('main-menu--opened');
mainMenu.classList.add('main-menu--closed');

mainMenuToggle.addEventListener('click', function () {
  if (mainMenu.classList.contains('main-menu--closed')) {
    mainMenu.classList.remove('main-menu--closed');
    mainMenu.classList.add('main-menu--opened');
    pageHeader.classList.add('page-header__wrapper--opened');
  } else {
    pageHeader.classList.remove('page-header__wrapper--opened');
    mainMenu.classList.remove('main-menu--opened');
    mainMenu.classList.add('main-menu--closed');
  }
});
