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
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
});
const examplesBotOne = new Swiper('.examples__slider-bot-one', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 5,
	// 	},
	// 	1162: {
	// 		slidesPerView: 3,
	// 	},
	// },
});

examplesTopOne.controller.control = examplesBotOne;
examplesBotOne.controller.control = examplesTopOne;

const examplesTopTwo = new Swiper('.examples__slider-top-two', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
});
const examplesBotTwo = new Swiper('.examples__slider-bot-two', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,

	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
});

examplesTopTwo.controller.control = examplesBotTwo;
examplesBotTwo.controller.control = examplesTopTwo;

const examplesTopThree = new Swiper('.examples__slider-top-three', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
});
const examplesBotThree = new Swiper('.examples__slider-bot-three', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,

	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
});

examplesTopThree.controller.control = examplesBotThree;
examplesBotThree.controller.control = examplesTopThree;

const examplesTopFour = new Swiper('.examples__slider-top-four', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
});
const examplesBotFour = new Swiper('.examples__slider-bot-four', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,

	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
});

examplesTopFour.controller.control = examplesBotFour;
examplesBotFour.controller.control = examplesTopFour;

const examplesTopFive = new Swiper('.examples__slider-top-five', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	loop: true,
	loopedSlides: 5,
});
const examplesBotFive = new Swiper('.examples__slider-bot-five', {
	slidesPerView: 3,
	spaceBetween: 10,
	speed: 1000,
	loop: true,

	loopedSlides: 5,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	allowTouchMove: false,
});

examplesTopFive.controller.control = examplesBotFive;
examplesBotFive.controller.control = examplesTopFive;