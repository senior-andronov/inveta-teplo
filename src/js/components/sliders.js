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