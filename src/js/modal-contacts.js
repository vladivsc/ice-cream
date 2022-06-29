(() => {
  const refs = {
    contactsBtn: document.querySelector('[data-contacts-button]'),
    contactsItm1: document.querySelector('[data-contacts-item1]'),
    contactsItm2: document.querySelector('[data-contacts-item2]'),
    contactsItm3: document.querySelector('[data-contacts-item3]'),
  };

  refs.contactsBtn.addEventListener('click', () => {
    if (refs.contactsItm1.classList.contains('contacts-is-visible')) {
      refs.contactsItm1.classList.remove('contacts-is-visible');
      refs.contactsItm2.classList.add('contacts-is-visible');
      refs.contactsItm3.classList.remove('contacts-is-visible');
    } else if (refs.contactsItm2.classList.contains('contacts-is-visible')) {
      refs.contactsItm1.classList.remove('contacts-is-visible');
      refs.contactsItm2.classList.remove('contacts-is-visible');
      refs.contactsItm3.classList.add('contacts-is-visible');
    } else if (refs.contactsItm3.classList.contains('contacts-is-visible')) {
      refs.contactsItm1.classList.add('contacts-is-visible');
      refs.contactsItm2.classList.remove('contacts-is-visible');
      refs.contactsItm3.classList.remove('contacts-is-visible');
    } else {
      return;
    }
  });
})();
