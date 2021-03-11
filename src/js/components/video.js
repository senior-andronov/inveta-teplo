if (document.querySelector('.hero__video video')) {
  const header = document.querySelector('.header');
  const video = document.querySelector('.hero__video video');
  const hero = document.querySelector('.hero');
  const box = document.querySelector('.hero__box');
  const control = document.querySelector('.hero__video-control');

  if (control) {
    control.addEventListener("click", function() {
      if (control.classList.contains('hero__video-control_play')) {
        video.play();
      } else {
        video.pause();
      }

      control.classList.toggle('hero__video-control_play');
    });
  }

  // window.addEventListener("scroll", () => {
  //   document.body.style.setProperty("--scroll", window.pageYOffset / 1000);
  //   console.log(window.pageYOffset / 1000);

  //   // console.log(window.pageYOffset);
  //   if (window.pageYOffset > 500) {
  //     document.body.classList.remove('body_scroll');
  //     header.classList.remove('header_scroll');
  //     hero.classList.remove('hero_scroll');
  //   }
  // }, false);

  // document.body.classList.add('body_scroll');
  // header.classList.add('header_scroll');
  // hero.classList.add('hero_scroll');

  // document.body.style.marginTop = -header.offsetHeight + 'px';
  // document.body.style.overflow = 'hidden';
  // header.style.transform = `translateY(${-header.offsetHeight}px)`;
  // box.style.height = window.innerHeight + 'px';
  // // console.log(window.innerHeight);
  // document.addEventListener('scroll', () => {
  //   console.log('aa');
  // });
}
