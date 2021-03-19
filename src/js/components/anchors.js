function scrollAnchors() {
	const anchors = document.querySelectorAll('a[href*="#"]')
	let menuBurger = document.querySelector('.header__burger');
	let menu = document.querySelector('.header__mob-menu');
	anchors.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			headerClick();
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