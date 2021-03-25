function scrollAnchors() {
	const anchors = document.querySelectorAll('a[href*="#"]')
	let menuBurger = document.querySelector('.header__burger');
	let menu = document.querySelector('.header__mob-menu');
	anchors.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			closeBurger()
			const block = anchor.getAttribute('href');
			if (block == '#') return;
			if (menuBurger.classList.contains('_active')) {
				menuBurger.classList.remove('_active')
				menu.classList.remove('_active')
				document.body.classList.remove('_lock');
			}
			_scrollTo(block, -110);
		})
	})
	function _scrollTo(selector, yOffset = 0) {
		const el = document.querySelector(selector);
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: 'smooth' });
	}
}
scrollAnchors()

let menuBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__mob-menu');
let headerMob = document.querySelector('.header');
let headerLogoDesc = document.querySelector('.header__logo-desc');
let headerLogoMob = document.querySelector('.header__logo-mob');

function burger() {
	if (menu.classList.contains('_active')) {
		closeBurger()
	} else {
		headerMob.classList.add('_active');
		headerLogoDesc.classList.add('_active');
		headerLogoMob.classList.add('_active');
		menu.classList.add('_active');
		menuBurger.classList.add('_active');
		document.body.classList.add('_lock');
	}
}
function closeBurger() {
	headerMob.classList.remove('_active');
	headerLogoDesc.classList.remove('_active');
	headerLogoMob.classList.remove('_active');
	menu.classList.remove('_active');
	menuBurger.classList.remove('_active');
	document.body.classList.remove('_lock');
}
window.addEventListener('click', function (e) {
	if (!headerMob.contains(e.target) && !menuBurger.contains(e.target) && headerMob.classList.contains('_active')) {
		burger();
	}
});
menuBurger.addEventListener('click', function () {
	burger();
})

