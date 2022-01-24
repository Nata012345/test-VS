function hamburgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.hamburger-menu__button');
  let links = menu.find('.hamburger-navigation__link');
  let overlay = menu.find('.hamburger-menu__overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('hamburger-menu_active');

    if (menu.hasClass('hamburger-menu_active')) {
      $('body').css('overflow', 'hidden');

    } else {
      $('body').css('overflow', 'visible');
    }
  }
}

hamburgerMenu('.hamburger-menu');