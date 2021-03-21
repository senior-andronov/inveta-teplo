window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	let scrollPos = 200;
	let header = document.querySelector('.header');
	let headerLogoDesc = document.querySelector('.header__logo-desc');
	let headerLogoMob = document.querySelector('.header__logo-mob');
	let menuLink = document.querySelectorAll('.header__menu-item');
	let menuBurger = document.querySelector('.header__burger');
	if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
		header.classList.add('_fixed');
		headerLogoDesc.classList.add('_fixed');
		headerLogoMob.classList.add('_fixed');
		menuLink.forEach(item => {
			item.classList.add('_fixed');
		});
		menuBurger.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
		headerLogoDesc.classList.remove('_fixed');
		headerLogoMob.classList.remove('_fixed');
		menuLink.forEach(item => {
			item.classList.remove('_fixed');
		});
		menuBurger.classList.remove('_fixed');
	}
}

// function headerFixed() {
// 	const mediaQuery = window.matchMedia('(min-width: 1024px)');
// 	if (mediaQuery.matches) {
// 		const header = document.querySelector('.header'),
// 			offsetHeight = header.offsetHeight;

// 		window.addEventListener('load', () => {
// 			const height = window.innerHeight;
// 			let lostY = 0;

// 			document.addEventListener('scroll', () => {
// 				if (lostY >= 900) {
// 					if (window.scrollY > lostY) {
// 						header.classList.add('hide');
// 					} else {
// 						if (window.scrollY > height || lostY < offsetHeight) header.classList.remove('hide');
// 					}
// 				}
// 				lostY = window.scrollY;
// 			});
// 		});
// 	}
// }
// headerFixed();