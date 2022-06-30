(() => {
  const refs = {
    heroAboutBtn: document.querySelector('[data-hero-about-button]'),
    heroAboutTxt: document.querySelector('[data-hero-about-text]'),
    heroAboutDesc: document.querySelector('[data-hero-about-description]'),
  };

  refs.heroAboutBtn.addEventListener('mouseover', () => {
    refs.heroAboutTxt.classList.add('is-text-invisible');
    refs.heroAboutDesc.classList.add('is-description-visible');
    refs.heroAboutBtn.classList.add('is-about-button-hovered');
  });

  refs.heroAboutBtn.addEventListener('mouseout', () => {
    refs.heroAboutTxt.classList.remove('is-text-invisible');
    refs.heroAboutDesc.classList.remove('is-description-visible');
    refs.heroAboutBtn.classList.remove('is-about-button-hovered');
  });
})();
