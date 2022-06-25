(() => {
  const refs = {
    mobileMenuBtn: document.querySelector('[data-mobile-menu-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    mobileMenuList: document.querySelector('[data-mobile-menu-list]'),
    buyBtn: document.querySelector('[data-buy-button]'),
  };

  refs.mobileMenuBtn.addEventListener('click', () => {
    const expanded =
      refs.mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.mobileMenuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenuBtn.classList.toggle('is-open');

    refs.mobileMenu.classList.toggle('is-open');
    if (refs.mobileMenu.classList.contains('is-open')) {
      refs.mobileMenu.scrollTo(top);
    }

    refs.buyBtn.classList.toggle('disabled');

    document.body.classList.toggle('mobile-menu-is-open');
  });

  refs.mobileMenuList.addEventListener('click', () => {
    const expanded =
      refs.mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.mobileMenuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenuBtn.classList.toggle('is-open');
    refs.mobileMenu.classList.toggle('is-open');
    refs.buyBtn.classList.toggle('disabled');

    document.body.classList.toggle('mobile-menu-is-open');
  });
})();
