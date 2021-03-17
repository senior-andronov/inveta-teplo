let menuBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu-list');
menuBurger.addEventListener('click', function () {
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
})