// window.onscroll = function () { scrollFunction() };
// function scrollFunction() {
// 	let scrollPos = 80;
// 	let header = document.querySelector('.header');
// 	let headerLogoDesc = document.querySelector('.header__logo-desc');
// 	let headerLogoMob = document.querySelector('.header__logo-mob');
// 	let menuLink = document.querySelectorAll('.header__menu-item');
// 	let menuBurger = document.querySelector('.header__burger');
// 	if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
// 		header.classList.add('_fixed');
// 		headerLogoDesc.classList.add('_fixed');
// 		headerLogoMob.classList.add('_fixed');
// 		menuLink.forEach(item => {
// 			item.classList.add('_fixed');
// 		});
// 		// animateCSS(header, 'animateTop');
// 		menuBurger.classList.add('_fixed');
// 	} else {
// 		header.classList.remove('_fixed');
// 		headerLogoDesc.classList.remove('_fixed');
// 		headerLogoMob.classList.remove('_fixed');
// 		menuLink.forEach(item => {
// 			item.classList.remove('_fixed');
// 		});
// 		menuBurger.classList.remove('_fixed');
// 		// animateCSS(header, 'animateUp');
// 	}
// }

function headerFixed() {
	let header = document.querySelector('.header'),
		offsetHeight = header.offsetHeight;
	window.addEventListener('load', function () {
		let height = window.innerHeight;
		let lostY = 0;
		document.addEventListener('scroll', function () {
			if (lostY >= 110) {
				if (window.scrollY > lostY) {
					header.classList.add('_hide');
				} else {
					if (window.scrollY > height || lostY < offsetHeight) {
						header.classList.remove('_hide')
						header.classList.add('_bg')
					}
				}
			} else {
				header.classList.remove('_bg')
				header.classList.remove('_hide')
			}
			lostY = window.scrollY;
		});
	});
}
headerFixed();




// function animateCSS(element, animation) {
// 	const animationName = animation;
// 	const node = (element.nodeType === 1) ? element : document.querySelector(element);
// 	node.classList.add(...animationName.split(' '));
// 	function handleAnimationEnd() {
// 		node.classList.remove(...animationName.split(' '));
// 	}
// 	node.addEventListener('animationend', handleAnimationEnd, { once: true });
// }