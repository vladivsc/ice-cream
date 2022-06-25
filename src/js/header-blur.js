(() => {
  const refs = {
    headerBlurContainer: document.querySelector('[data-header-blur-container]'),
    mobileMenuBtn: document.querySelector('[data-mobile-menu-button]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    fixedBar: document.querySelector('[data-fixed-bar]'),
    header: document.querySelector('[data-header]'),
  };

  window.onscroll = () => {
    const header = refs.header;
    const headerOffsetTrigger = header.offsetTop;
    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
      refs.headerBlurContainer.classList.add('is-blurred');
      refs.fixedBar.classList.add('transformed-up');
      refs.mobileMenuBtn.classList.add('transformed-down');
      refs.mobileMenu.classList.add('transformed-down');
    } else {
      refs.headerBlurContainer.classList.remove('is-blurred');
      refs.fixedBar.classList.remove('transformed-up');
      refs.mobileMenuBtn.classList.remove('transformed-down');
      refs.mobileMenu.classList.remove('transformed-down');
    }
  };
})();
