if (
  document.querySelector('.product-filter__btn-show') &&
  document.querySelector('.product-filter__form') &&
  document.querySelector('.product-filter__form-close')
) {
  const showBtn = document.querySelector('.product-filter__btn-show');
  const closeBtn = document.querySelector('.product-filter__form-close');
  const form = document.querySelector('.product-filter__form');

  showBtn.addEventListener('click', () => {
    form.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    form.style.display = 'none';
  });
}

if (
  document.querySelector('.product-listing__row-checkbox .checkbox__input') &&
  document.querySelector('.product-selected-items')
) {
  const checkboxs = document.querySelectorAll('.product-listing__row-checkbox .checkbox__input');
  const productSelected = document.querySelector('.product-selected-items');
  const titleValue = document.querySelector('.product-selected-items__title-value');
  const reset = document.querySelector('.product-selected-items__reset');

  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      showCounter();
    });
  });

  reset.addEventListener('click', () => {
    checkboxs.forEach((checkbox) => (checkbox.checked = false));
    showCounter();
  });

  function showCounter() {
    const counter = [...checkboxs].reduce((a, e) => (e.checked ? a + 1 : a + 0), 0);

    titleValue.textContent = counter;

    if (counter) {
      productSelected.classList.add('show-product-selected');
    } else {
      productSelected.classList.remove('show-product-selected');
    }
  }
}

if (
  document.querySelector('.product-filter__all-fiters') &&
  document.querySelectorAll('.product-filter__form-field:nth-child(n+3)') &&
  document.querySelector('.product-filter__form-fieldset')
) {
  const btnShowFilters = document.querySelector('.product-filter__all-fiters'),
        filters = document.querySelectorAll('.product-filter__form-field:nth-child(n+5)'),
        wrapperFilter = document.querySelector('.product-filter__form-fieldset');
  
  btnShowFilters.addEventListener('click', () => {
    if (btnShowFilters.classList.contains('filter-open')) {
      for (const filter of filters) {
        filter.classList.add('field-hide');
      }
      btnShowFilters.classList.remove('filter-open');
      wrapperFilter.classList.remove('height-auto');
    } else {
      for (const filter of filters) {
        filter.classList.remove('field-hide');
      }
      wrapperFilter.classList.add('height-auto');
      btnShowFilters.classList.add('filter-open');
    }
  })
}
