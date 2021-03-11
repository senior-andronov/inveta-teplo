import { Bloks }  from '../lib/bloks.js';

export function sendCallback() {
  if (document.querySelector('.callback-modal')) {
    const parent = document.querySelector('.callback-modal');
    const content = parent.querySelector('.modal__content ');
    const bloks = new Bloks(parent, '.callback-modal__section');
    const close = parent.querySelector('.header-modal-close');
    const btnOk = parent.querySelector('.callback-modal__ok');

    bloks.next();

    close.addEventListener('click', () => {
      bloks.show(parent.querySelector('.callback-modal__section'));
    });

    btnOk.addEventListener('click', () => {
      content.addEventListener('animationend', () => {
        bloks.show(parent.querySelector('.callback-modal__section'));
      })
    });
  }
}
