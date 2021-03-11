
import { Bloks } from '../lib/bloks.js';

const parent = document.querySelector('.shopping');
const section = parent.querySelector('.shopping__section');
const next = parent.querySelector('.shopping__next');
const back = parent.querySelector('.shopping__back');
const ok = parent.querySelector('.shopping__complite-ok');
const delAll = parent.querySelector('.shopping__filter-clear');
const dels = parent.querySelectorAll('.shopping__card-delete');

window.basket = new Bloks(parent);

document.addEventListener('changeBasket', (evt) => {
  const cards = document.querySelectorAll('.shopping__card');
  const counter = document.querySelector('.shopping__filter-counter');
  const next = document.querySelector('.shopping__next');

  counter.textContent = `${cards.length} товара`;

  if (cards.length > 0) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
});

next.addEventListener('click', () => {
  basket.next();
});

back.addEventListener('click', () => {
  basket.prev();
});

ok.addEventListener('click', (evt) => {
  evt.preventDefault();

  setTimeout(() => {
    basket.show(section);
  }, 300);
});

dels.forEach((del) => {
  del.addEventListener('click', (evt) => {
    evt.preventDefault();

    del.closest('.shopping__card').remove();

    document.dispatchEvent(new Event('changeBasket'));
  });
});

delAll.addEventListener('click', (evt) => {
  evt.preventDefault();

  const cards = document.querySelectorAll('.shopping__card');

  cards.forEach((card) => {
    card.remove();
  });

  document.dispatchEvent(new Event('changeBasket'));
});
