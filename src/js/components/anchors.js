function scrollToBlock() {
	const anchors = document.querySelectorAll('a[href*="#"]');
	anchors.forEach(anchor => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();
			const url = anchor.getAttribute('href');
			document.querySelector(url).scrollIntoView({
				behavior: 'smooth'
			});
		})
	})
}
scrollToBlock();