(() => {
  const refs = {
    headerBlurContainer: document.querySelector('[data-header-blur-container]'),
    mobileMenuBtn: document.querySelector('[data-mobile-menu-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    fixedBar: document.querySelector('[data-fixed-bar]'),

    header: document.querySelector('[data-header]'),
    products: document.querySelector('[data-products]'),
    about: document.querySelector('[data-about]'),
    gallery: document.querySelector('[data-gallery]'),
    contacts: document.querySelector('[data-contacts]'),

    homeLink: document.querySelector('[data-home-link]'),
    productsLink: document.querySelector('[data-products-link]'),
    aboutLink: document.querySelector('[data-about-link]'),
    galleryLink: document.querySelector('[data-gallery-link]'),
    contactsLink: document.querySelector('[data-contacts-link]'),

    homeMobileLink: document.querySelector('[data-home-mobile-link]'),
    productsMobileLink: document.querySelector('[data-products-mobile-link]'),
    aboutMobileLink: document.querySelector('[data-about-mobile-link]'),
    galleryMobileLink: document.querySelector('[data-gallery-mobile-link]'),
    contactsMobileLink: document.querySelector('[data-contacts-mobile-link]'),
  };

  const deactivateAll = () => {
    if (refs.homeLink.classList.contains('is-active')) {
      refs.homeLink.classList.remove('is-active');
    }
    if (refs.productsLink.classList.contains('is-active')) {
      refs.productsLink.classList.remove('is-active');
    }
    if (refs.aboutLink.classList.contains('is-active')) {
      refs.aboutLink.classList.remove('is-active');
    }
    if (refs.galleryLink.classList.contains('is-active')) {
      refs.galleryLink.classList.remove('is-active');
    }
    if (refs.contactsLink.classList.contains('is-active')) {
      refs.contactsLink.classList.remove('is-active');
    }
    if (refs.homeMobileLink.classList.contains('is-active')) {
      refs.homeMobileLink.classList.remove('is-active');
    }
    if (refs.productsMobileLink.classList.contains('is-active')) {
      refs.productsMobileLink.classList.remove('is-active');
    }
    if (refs.aboutMobileLink.classList.contains('is-active')) {
      refs.aboutMobileLink.classList.remove('is-active');
    }
    if (refs.galleryMobileLink.classList.contains('is-active')) {
      refs.galleryMobileLink.classList.remove('is-active');
    }
    if (refs.contactsMobileLink.classList.contains('is-active')) {
      refs.contactsMobileLink.classList.remove('is-active');
    }
  };

  const scrollEvents = () => {
    const pageOffset = window.pageYOffset;

    if (pageOffset > refs.header.offsetTop) {
      refs.headerBlurContainer.classList.add('is-blurred');
      refs.fixedBar.classList.add('transformed-up');
      refs.mobileMenuBtn.classList.add('transformed-down');
      refs.mobileMenu.classList.add('transformed-down');

      if (
        pageOffset + window.innerHeight / 2 > refs.homeLink.offsetTop &&
        pageOffset + window.innerHeight / 2 < refs.products.offsetTop
      ) {
        deactivateAll();
        refs.homeLink.classList.add('is-active');
        refs.homeMobileLink.classList.add('is-active');
      } else if (
        pageOffset + window.innerHeight / 2 > refs.products.offsetTop &&
        pageOffset + window.innerHeight / 2 < refs.about.offsetTop
      ) {
        deactivateAll();
        refs.productsLink.classList.add('is-active');
        refs.productsMobileLink.classList.add('is-active');
      } else if (
        pageOffset + window.innerHeight / 2 > refs.about.offsetTop &&
        pageOffset + window.innerHeight / 2 < refs.gallery.offsetTop
      ) {
        deactivateAll();
        refs.aboutLink.classList.add('is-active');
        refs.aboutMobileLink.classList.add('is-active');
      } else if (
        pageOffset + window.innerHeight / 2 > refs.gallery.offsetTop &&
        pageOffset + window.innerHeight / 2 < refs.contacts.offsetTop
      ) {
        deactivateAll();
        refs.galleryLink.classList.add('is-active');
        refs.galleryMobileLink.classList.add('is-active');
      } else if (
        pageOffset + window.innerHeight / 2 >
        refs.contacts.offsetTop
      ) {
        deactivateAll();
        refs.contactsLink.classList.add('is-active');
        refs.contactsMobileLink.classList.add('is-active');
      } else {
        deactivateAll();
      }
    } else {
      refs.headerBlurContainer.classList.remove('is-blurred');
      refs.fixedBar.classList.remove('transformed-up');
      refs.mobileMenuBtn.classList.remove('transformed-down');
      refs.mobileMenu.classList.remove('transformed-down');
      deactivateAll();
      refs.homeLink.classList.add('is-active');
      refs.homeMobileLink.classList.add('is-active');
    }
  };

  window.onload = () => {
    scrollEvents();
  };

  window.onscroll = () => {
    scrollEvents();
  };
})();
