window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	let scrollPos = 200;
	let header = document.querySelector('.header');
	let headerLogoDesc = document.querySelector('.header__logo-desc');
	let headerLogoMob = document.querySelector('.header__logo-mob');
	let menuLink = document.querySelectorAll('.header__menu-item');
	let menuBurger = document.querySelector('.header__burger');
	if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
		header.classList.add('_active');
		headerLogoDesc.classList.add('_active');
		headerLogoMob.classList.add('_active');
		menuLink.forEach(item => {
			item.classList.add('_active');
		});
		menuBurger.classList.add('active');
	} else {
		header.classList.remove('_active');
		headerLogoDesc.classList.remove('_active');
		headerLogoMob.classList.remove('_active');
		menuLink.forEach(item => {
			item.classList.remove('_active');
		});
		menuBurger.classList.remove('active');
	}
}