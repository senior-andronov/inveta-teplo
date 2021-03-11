if (document.querySelector('.header')) {
  const header = document.querySelector('.header'),
        offsetHeight = header.offsetHeight;

  window.addEventListener('load', () => {
    const height = window.innerHeight;
    let lostY = 0;
    let counter = 0;

    document.addEventListener('scroll', () => {
      if (document.documentElement.clientWidth < 992) return;
      if (header.classList.contains('header_fixed')) return;

      if (window.scrollY > lostY) {
        window.scrollY > offsetHeight && header.classList.add('header_hide');

        counter = window.scrollY;
      } else {
        if (counter - window.scrollY > height || lostY < offsetHeight) {
          header.classList.remove('header_hide');
        }
      }

      lostY = window.scrollY;
    });
  });
}
