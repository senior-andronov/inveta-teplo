import { animateCSS } from '../utils.js';

if (document.querySelector('.hero__message')) {
  const mess = document.querySelector('.hero__message'),
        close = mess.querySelector('.new-message__close');

  close.addEventListener('click', (evt) => {
    evt.preventDefault();

    animateCSS('.hero__message', 'animate__slideOutRight');
    mess.classList.add('hero__message_hide');
  });
}
