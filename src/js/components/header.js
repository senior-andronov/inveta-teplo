function scrollHeader() {
	let curScroll
	let prevScroll = window.scrollY || document.documentElement.scrollTop
	let curDirection = 0
	let prevDirection = 0
	let header = document.querySelector('.header')
	let toggled
	let threshold = 110


	if (window.scrollY >= threshold) {
		header.classList.add('_bg')
	}

	console.log(threshold);

	function checkScroll() {
		curScroll = window.scrollY || document.documentElement.scrollTop
		if (curScroll < threshold) {
			header.classList.remove('_bg')
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
	window.addEventListener('scroll', checkScroll)
};
scrollHeader()
