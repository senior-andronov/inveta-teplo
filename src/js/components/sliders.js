import Swiper, { Navigation, Pagination, Lazy, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy, Thumbs]);

const feedback = new Swiper('.feedback__slider', {
	slidesPerView: 'auto',
	spaceBetween: 30,
	speed: 1000,
	navigation: {
		prevEl: '.swiper-prev',
		nextEl: '.swiper-next',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	breakpoints: {
		0: {
			centeredSlides: true,
			allowTouchMove: true,
		},
		768: {
			centeredSlides: false,
			allowTouchMove: false,
		},
	},
});
const examplesBotOne = new Swiper('.examples__slider-bot-one', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesTopOne = new Swiper('.examples__slider-top-one', {
	spaceBetween: 30,
	speed: 1000,
	grabCursor: true,
	pagination: {
		el: '.examples__progressbar-one',
		type: 'progressbar',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: examplesBotOne,
	},
	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;
			let activeSlide = document.querySelector(`.examples__slider-bot-one .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.examples__slider-bot-one .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.examples__slider-bot-one .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	}
});

const examplesBotTwo = new Swiper('.examples__slider-bot-two', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

const examplesTopTwo = new Swiper('.examples__slider-top-two', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	grabCursor: true,
	pagination: {
		el: '.examples__progressbar-two',
		type: 'progressbar',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: examplesBotTwo,
	},
	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;
			let activeSlide = document.querySelector(`.examples__slider-bot-two .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.examples__slider-bot-two .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.examples__slider-bot-two .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	}
});

const examplesBotThree = new Swiper('.examples__slider-bot-three', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

const examplesTopThree = new Swiper('.examples__slider-top-three', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	grabCursor: true,
	pagination: {
		el: '.examples__progressbar-three',
		type: 'progressbar',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: examplesBotThree,
	},
	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;
			let activeSlide = document.querySelector(`.examples__slider-bot-three .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.examples__slider-bot-three .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.examples__slider-bot-three .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	}
});

const examplesBotFour = new Swiper('.examples__slider-bot-four', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

const examplesTopFour = new Swiper('.examples__slider-top-four', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	grabCursor: true,
	pagination: {
		el: '.examples__progressbar-four',
		type: 'progressbar',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: examplesBotFour,
	},
	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;
			let activeSlide = document.querySelector(`.examples__slider-bot-four .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.examples__slider-bot-four .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.examples__slider-bot-four .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	}
});

const examplesBotFive = new Swiper('.examples__slider-bot-five', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slideToClickedSlide: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

const examplesTopFive = new Swiper('.examples__slider-top-five', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	grabCursor: true,
	pagination: {
		el: '.examples__progressbar-five',
		type: 'progressbar',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
	thumbs: {
		swiper: examplesBotFive,
	},
	on: {
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;
			let activeSlide = document.querySelector(`.examples__slider-bot-five .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.examples__slider-bot-five .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.examples__slider-bot-five .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	}
});

