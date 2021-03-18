let menuBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__mob-menu');
let headerMob = document.querySelector('.header');
let headerLogoDesc = document.querySelector('.header__logo-desc');
let headerLogoMob = document.querySelector('.header__logo-mob');
menuBurger.addEventListener('click', function () {
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
	headerMob.classList.toggle('_active');
	headerLogoDesc.classList.toggle('_active');
	headerLogoMob.classList.toggle('_active');
})