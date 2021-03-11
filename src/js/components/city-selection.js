if (document.querySelector('.choice-city')) {
  const parent = document.querySelector('.choice-city'),
        suptitle = parent.querySelector('.header-modal__suptitle'),
        list = parent.querySelector('.choice-city__city-list'),
        input = parent.querySelector('.choice-city__search-input'),
        clear = parent.querySelector('.choice-city__search-clear'),
        result = parent.querySelector('.choice-city__result');

  input.addEventListener('input', (evt) => {
    if (input.value !== '') {
      suptitle.textContent = 'результаты поиска';
      list.classList.add('choice-city__section_hide');
      result.classList.remove('choice-city__section_hide');
    } else {
      suptitle.textContent = 'Популярные города';
      list.classList.remove('choice-city__section_hide');
      result.classList.add('choice-city__section_hide');
    }
  });

  clear.addEventListener('click', (evt) => {
    evt.preventDefault();

    input.focus();

    if (input.value !== '') {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    }
  });
}
