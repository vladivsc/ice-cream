(() => {
  const refs = {
    headerBlurContainer: document.querySelector('[data-header-blur-container]'),
    header: document.querySelector('[data-header]'),
  };

  window.onscroll = () => {
    const header = refs.header;
    const headerOffsetTrigger = header.offsetTop;
    const pageOffset = window.pageYOffset;

    if (pageOffset > headerOffsetTrigger) {
      refs.headerBlurContainer.classList.add('is-blurred');
    } else {
      refs.headerBlurContainer.classList.remove('is-blurred');
    }
  };
})();
