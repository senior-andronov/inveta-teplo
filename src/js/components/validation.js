import { sendCallback } from '../components/callback.js';

document.querySelectorAll('.need-validate').forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    form.classList.add('was-validate');

    if (form.checkValidity() === true) {
      form.classList.remove('was-validate');
      console.log('отправлено');

      if (form.id === 'form-callback') {
        sendCallback();
        form.reset();
      }

      if (form.id === 'form-shopping') {
        const sections = document.querySelectorAll('.shopping__section');
        const last = sections.length - 1;

        basket.show(sections[last]);
        form.reset();
      }

      if (form.id === 'form-newsletter') {
        const parent = document.querySelector('.newsletter'),
              form = parent.querySelector('.newsletter__form'),
              sections = parent.querySelectorAll('.newsletter__section'),
              input = parent.querySelector('.newsletter__form-input');

        if (!parent) return;

        form.classList.add('newsletter__form_load');
        input.disabled = true;

        setTimeout(() => {
          sections[0].classList.add('newsletter__section_hide');
          sections[1].classList.remove('newsletter__section_hide');
        }, 2000);
      }
    }
  });
});
