import Swiper, { Navigation, Pagination, Controller, Lazy } from 'swiper';
Swiper.use([Navigation, Pagination, Controller, Lazy]);

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

const examplesTopOne = new Swiper('.examples__slider-top-one', {
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.examples__progressbar-one',
		type: 'progressbar',
	},
	navigation: {
		prevEl: '.examples__prev-one',
		nextEl: '.examples__next-one',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesBotOne = new Swiper('.examples__slider-bot-one', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	allowTouchMove: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

examplesTopOne.controller.control = examplesBotOne;
examplesBotOne.controller.control = examplesTopOne;

const examplesTopTwo = new Swiper('.examples__slider-top-two', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.examples__progressbar-two',
		type: 'progressbar',
	},
	navigation: {
		prevEl: '.examples__prev-two',
		nextEl: '.examples__next-two',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesBotTwo = new Swiper('.examples__slider-bot-two', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	allowTouchMove: false,
	preloadImages: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	lazy: {
		loadPrevNext: true,
	},
});

examplesTopTwo.controller.control = examplesBotTwo;
examplesBotTwo.controller.control = examplesTopTwo;

const examplesTopThree = new Swiper('.examples__slider-top-three', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.examples__progressbar-three',
		type: 'progressbar',
	},
	navigation: {
		prevEl: '.examples__prev-three',
		nextEl: '.examples__next-three',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesBotThree = new Swiper('.examples__slider-bot-three', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	allowTouchMove: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});

examplesTopThree.controller.control = examplesBotThree;
examplesBotThree.controller.control = examplesTopThree;

const examplesTopFour = new Swiper('.examples__slider-top-four', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.examples__progressbar-four',
		type: 'progressbar',
	},
	navigation: {
		prevEl: '.examples__prev-four',
		nextEl: '.examples__next-four',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesBotFour = new Swiper('.examples__slider-bot-four', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	allowTouchMove: false,
	preloadImages: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	lazy: {
		loadPrevNext: true,
	},
});

examplesTopFour.controller.control = examplesBotFour;
examplesBotFour.controller.control = examplesTopFour;

const examplesTopFive = new Swiper('.examples__slider-top-five', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	pagination: {
		el: '.examples__progressbar-five',
		type: 'progressbar',
	},
	navigation: {
		prevEl: '.examples__prev-five',
		nextEl: '.examples__next-five',
	},
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
});
const examplesBotFive = new Swiper('.examples__slider-bot-five', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	allowTouchMove: false,
	preloadImages: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	lazy: {
		loadPrevNext: true,
	},
});

examplesTopFive.controller.control = examplesBotFive;
examplesBotFive.controller.control = examplesTopFive;