function scrollAnchors() {
	const anchors = document.querySelectorAll('a[href*="#"]')
	let menuBurger = document.querySelector('.header__burger');
	let menu = document.querySelector('.header__mob-menu');
	anchors.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			burger()
			const block = anchor.getAttribute('href');
			if (block == '#') return;
			if (menuBurger.classList.contains('_active')) {
				menuBurger.classList.remove('_active')
				menu.classList.remove('_active')
				document.body.classList.remove('_lock');
			}
			document.querySelector(block).scrollIntoView({
				behavior: 'smooth',
				// block: 'center',
			})
		})
	})
}
scrollAnchors()

let menuBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__mob-menu');
let headerMob = document.querySelector('.header');
let headerLogoDesc = document.querySelector('.header__logo-desc');
let headerLogoMob = document.querySelector('.header__logo-mob');

function burger() {
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
	if (document.documentElement.clientWidth < 1192) {
		headerMob.classList.toggle('_active');
		headerLogoDesc.classList.toggle('_active');
		headerLogoMob.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	}
}
// function removeMenu() {
// 	menuBurger.classList.remove('_active');
// 	headerMob.classList.remove('_active');
// 	headerLogoDesc.classList.remove('_active');
// 	headerLogoMob.classList.remove('_active');
// 	document.body.classList.remove('_lock');
// }
// function removeMenu1(event) {
// 	if (event.target == document.querySelector('.header__mob-menu._active')) removeMenu()
// 	console.log(event.target != document.querySelector('.header__mob-menu._active'));

// }
// window.addEventListener('click', removeMenu1)
window.addEventListener('click', function (e) {
	if (!headerMob.contains(e.target) && !menuBurger.contains(e.target) && headerMob.classList.contains('_active')) {
		burger();
	}
});
// removeMenu();
menuBurger.addEventListener('click', function () {
	burger();
})

