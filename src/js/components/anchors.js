function scrollAnchors() {
	const anchors = document.querySelectorAll('a[href*="#"]')

	anchors.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const block = anchor.getAttribute('href');
			if (block == '#') return

			document.querySelector(block).scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		})
	})
}
scrollAnchors()