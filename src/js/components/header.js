function headerFixed() {
	let header = document.querySelector('.header'),
		offsetHeight = header.offsetHeight;
	window.addEventListener('load', function () {
		let height = window.innerHeight;
		let lostY = window.scrollY;
		if (pageYOffset > offsetHeight) { header.classList.add('_hide'); }
		document.addEventListener('scroll', function () {
			checkHeight();
		});
		checkHeight();
		function checkHeight() {
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
		}
	});
}
headerFixed();