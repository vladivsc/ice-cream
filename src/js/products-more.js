(() => {
  const refs = {
    moreBtnIcecream: document.querySelector('[data-more-button-icecream]'),
    moreIcecream: document.querySelector('[data-more-icecream]'),
    moreBtnCoffee: document.querySelector('[data-more-button-coffee]'),
    moreCoffee: document.querySelector('[data-more-coffee]'),
    moreBtnMilkshakes: document.querySelector('[data-more-button-milkshakes]'),
    moreMilkshakes: document.querySelector('[data-more-milkshakes]'),
  };

  refs.moreBtnIcecream.addEventListener('mouseover', () => {
    refs.moreIcecream.classList.add('is-visible');
    refs.moreBtnIcecream.classList.add('is-hovered');
  });
  refs.moreBtnIcecream.addEventListener('mouseout', () => {
    refs.moreIcecream.classList.remove('is-visible');
    refs.moreBtnIcecream.classList.remove('is-hovered');
  });

  refs.moreBtnCoffee.addEventListener('mouseover', () => {
    refs.moreCoffee.classList.add('is-visible');
    refs.moreBtnCoffee.classList.add('is-hovered');
  });
  refs.moreBtnCoffee.addEventListener('mouseout', () => {
    refs.moreCoffee.classList.remove('is-visible');
    refs.moreBtnCoffee.classList.remove('is-hovered');
  });

  refs.moreBtnMilkshakes.addEventListener('mouseover', () => {
    refs.moreMilkshakes.classList.add('is-visible');
    refs.moreBtnMilkshakes.classList.add('is-hovered');
  });
  refs.moreBtnMilkshakes.addEventListener('mouseout', () => {
    refs.moreMilkshakes.classList.remove('is-visible');
    refs.moreBtnMilkshakes.classList.remove('is-hovered');
  });
})();
