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

const examplesTop = new Swiper('.examples__slider-top', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	// thumbs: {
	// 	swiper: examplesBot,
	// }
});
const examplesBot = new Swiper('.examples__slider-bot', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	// slidesPerView: 3,
	// freeMode: true,
	// watchSlidesVisibility: true,
	// watchSlidesProgress: true,
});

// examplesTop.controller.control = examplesBot;
// examplesBot.controller.control = examplesTop;