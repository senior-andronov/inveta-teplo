let md1 = window.matchMedia("(min-width: 992px)")
// Is Iphone?
const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);
// -- //
function headerFixed() {
	let header = document.querySelector('.header'),
		offsetHeight = header.offsetHeight;
	window.addEventListener('load', function () {
		let height = window.innerHeight;
		let lostY = window.scrollY;
		if (pageYOffset > offsetHeight) {
			header.classList.add('_hide');
		}
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
			} else if (isiPhone || isiPad || isiPod && document.querySelector('body').classList.contains('ios-lock')) {
				header.classList.remove('_hide')
				header.classList.add('_bg')
			} else {
				header.classList.remove('_bg')
				header.classList.remove('_hide')
				if (pageYOffset > offsetHeight && md1.matches) {
					header.classList.add('_hide');
				}
			}
			lostY = window.scrollY;
		}
	});
}
headerFixed();
