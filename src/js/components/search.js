
if (document.querySelector('.search')) {
  const search = document.querySelector('.search'),
        input = search.querySelector('.search__input'),
        popular = search.querySelector('.search__result_popular');

  if (input && popular) {
    input.addEventListener('focus', () => {
      popular.style.display = 'block';
    });

    document.addEventListener('click', (evt) => {
      if (!evt.target.closest('.search')) {
        popular.removeAttribute('style');
      }
    });
  }
}
