(() => {
  const refs = {
    mobileMenuBtn: document.querySelector('[data-mobile-menu-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    mobileMenuList: document.querySelector('[data-mobile-menu-list]'),
    buyBtn: document.querySelector('[data-buy-button]'),
    mobileBuyBtn: document.querySelector('[data-mobile-menu-buy]'),
  };

  const toggleMenu = () => {
    const expanded =
      refs.mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.mobileMenuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenuBtn.classList.toggle('is-open');
    refs.mobileMenu.classList.toggle('is-open');
    refs.buyBtn.classList.toggle('disabled');
  };

  refs.mobileMenuBtn.addEventListener('click', () => {
    toggleMenu();

    if (refs.mobileMenu.classList.contains('is-open')) {
      refs.mobileMenu.scrollTo(top);
    }
  });

  refs.mobileMenuList.addEventListener('click', () => toggleMenu());

  refs.mobileBuyBtn.addEventListener('click', () => toggleMenu());

  document.body.addEventListener('mouseup', e => {
    let menu = refs.mobileMenu;
    let menuBtn = refs.mobileMenuBtn;
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_menuBtnClose = target == menuBtn || menuBtn.contains(target);
    let menu_is_active = menu.classList.contains('is-open');

    if (!its_menu && !its_menuBtnClose && menu_is_active) {
      toggleMenu();
    }
  });
})();
