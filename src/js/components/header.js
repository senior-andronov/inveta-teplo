// let md1 = window.matchMedia("(min-width: 992px)")
// // Is Iphone?
// const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
// const isiPad = (navigator.userAgent.match(/iPad/i) != null);
// const isiPod = (navigator.userAgent.match(/iPod/i) != null);
// // -- //
// function headerFixed() {
// 	let header = document.querySelector('.header'),
// 		offsetHeight = header.offsetHeight;
// 	window.addEventListener('load', function () {
// 		let height = window.innerHeight;
// 		let lostY = window.scrollY;
// 		if (pageYOffset > offsetHeight) {
// 			header.classList.add('_hide');
// 		}
// 		document.addEventListener('scroll', function () {
// 			checkHeight();
// 		});
// 		checkHeight();
// 		function checkHeight() {
// 			if (lostY >= 110) {
// 				if (window.scrollY > lostY) {
// 					header.classList.add('_hide');
// 				} else {
// 					if (window.scrollY > height || lostY < offsetHeight) {
// 						header.classList.remove('_hide')
// 						header.classList.add('_bg')
// 					}
// 				}
// 			} else if (isiPhone || isiPad || isiPod && document.querySelector('body').classList.contains('ios-lock')) {
// 				header.classList.remove('_hide')
// 				header.classList.add('_bg')
// 			} else {
// 				header.classList.remove('_bg')
// 				header.classList.remove('_hide')
// 				if (pageYOffset > offsetHeight && md1.matches) {
// 					header.classList.add('_hide');
// 				}
// 			}
// 			lostY = window.scrollY;
// 		}
// 	});
// }
// headerFixed();

// let md1 = window.matchMedia("(min-width: 992px)")
// const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
// const isiPad = (navigator.userAgent.match(/iPad/i) != null);
// const isiPod = (navigator.userAgent.match(/iPod/i) != null);
(function () {
	let curScroll
	let prevScroll = window.scrollY || document.documentElement.scrollTop
	let curDirection = 0
	let prevDirection = 0
	let header = document.querySelector('.header')
	let toggled
	let threshold = 110

	function checkScroll() {
		curScroll = window.scrollY || document.documentElement.scrollTop
		if (curScroll < threshold) {
			header.classList.remove('_bg')
			console.log(1)
		}
		if (curScroll > prevScroll) {
			// scrolled down
			curDirection = 2
		} else {
			//scrolled up
			curDirection = 1
		}
		if (curDirection !== prevDirection) {
			toggled = toggleHeader()
		}
		prevScroll = curScroll
		if (toggled) {
			prevDirection = curDirection
		}
	};

	function toggleHeader() {
		toggled = true
		if (curDirection === 2 && curScroll > threshold) {
			header.classList.add('_hide')
		}
		else if (curDirection === 1) {
			header.classList.remove('_hide')
			header.classList.add('_bg')
		}
		else {
			toggled = false
		}
		return toggled
	};
	// checkScroll()
	window.addEventListener('scroll', checkScroll)
})();