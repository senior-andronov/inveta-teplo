import Swiper, { Navigation, Pagination, Thumbs, EffectFade } from 'Swiper';
import { animateCSS } from '../utils.js';

Swiper.use([Navigation, Pagination, Thumbs, EffectFade]);

if (document.querySelector('.hero__slider')) {
  const hero = new Swiper('.hero__slider', {
      direction: 'vertical',
      simulateTouch: false,
      // autoplay: {
      //   delay: 500,
      // },
    }),
    heroLength = hero.slides.length;

  let heroCounter = 0,
    heroInterval = setInterval(() => {
      if (heroCounter === heroLength) {
        clearInterval(heroInterval);
      }

      hero.slideNext();
      heroCounter++;
    }, 500);
}

const activity = new Swiper('.activity__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.activity__prev',
    nextEl: '.activity__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const sentence = new Swiper('.sentence__slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: '.sentence__prev',
    nextEl: '.sentence__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

removeSentenceSlide();

window.addEventListener('resize', () => {
  removeSentenceSlide();
});

function removeSentenceSlide() {
  if (document.documentElement.offsetWidth < 992) {
    if (document.querySelector('.sentence__special-slide')) {
      sentence.removeSlide(0);
    }
  } else {
    if (!document.querySelector('.sentence__special-slide')) {
      let sentenceCopy;

      if (document.querySelector('.sentence__section-special')) {
        sentenceCopy = `<div class="swiper-slide sentence__special-slide">
          ${document.querySelector('.sentence__section-special').innerHTML}
        </div>`;
      }

      if (sentenceCopy) {
        sentence.addSlide(0, sentenceCopy);
      }
    }
  }
}

const news = new Swiper('.news__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.news__prev',
    nextEl: '.news__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const interleaveOffset = 0.5;
const facts = new Swiper('.facts__slider', {
  loop: true,
  speed: 1000,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
    prevEl: '.facts__prev',
    nextEl: '.facts__next',
  },
  on: {
    init() {
      setAutoplay(5000);
    },
    progress(swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        const slideProgress = swiper.slides[i].progress;
        const innerOffset = swiper.width * interleaveOffset;
        const innerTranslate = slideProgress * innerOffset;

        swiper.slides[i].querySelector('.facts__item').style.transform = `translateX(${innerTranslate}px)`;
      }
    },
    touchStart(swiper) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = '';
      }
    },
    setTransition(swiper, speed) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + 'ms';
        swiper.slides[i].querySelector('.facts__item').style.transition = `all ${speed}ms ease 0s`;
      }
    },
    slideChangeTransitionStart(swiper) {
      const activeSlide = [...swiper.slides].find((slide) => slide.classList.contains('swiper-slide-active'));
      const title = activeSlide.querySelector('.facts__item-title');

      animateCSS(title, 'a-fade-up a-delay-200');
    },
  },
});

function setAutoplay(duration = 0) {
  if (!document.querySelector('.circle-progress__bar')) return;

  let circle = document.querySelector('.circle-progress__bar'),
    radius = circle.getAttribute('r'),
    cf = 2 * Math.PI * radius;

  circle.setAttribute('stroke-dasharray', `${cf} ${cf}`);
  start(duration);

  setInterval(() => {
    start(duration);
    facts.slideNext();
  }, duration);

  function start(duration) {
    const start = performance.now();

    requestAnimationFrame(animate);

    function animate(time) {
      let timeFraction = (time - start) / duration;

      if (timeFraction > 1) timeFraction = 1;

      setProgress(timeFraction * 100);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    }
  }

  function setProgress(persent) {
    let offset = cf - (persent / 100) * cf;
    circle.style.strokeDashoffset = offset;
  }
}

const popularGoods = new Swiper('.popular-goods__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.popular-goods__prev',
    nextEl: '.popular-goods__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const productThumbs = new Swiper('.product-slider__thumbs', {
  slidesPerView: 7,
  spaceBetween: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const product = new Swiper('.product-slider__slider', {
  effect: 'fade',
  thumbs: {
    swiper: productThumbs,
  },
  navigation: {
    nextEl: '',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction(currentClass, totalClass) {
      return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
    },
  },
});

const productInterestedSlider = new Swiper('.product-interested__slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: '.product-interested__prev',
    nextEl: '.product-interested__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

const productLookingSlider = new Swiper('.product-looking__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.product-looking__prev',
    nextEl: '.product-looking__next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
