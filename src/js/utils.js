export function animateCSS(element, animation) {
	return new Promise((resolve, reject) => {
		const animationName = animation;
		const node = (element.nodeType === 1) ? element : document.querySelector(element);

		node.classList.add('animate__animated', ...animationName.split(' '));

		function handleAnimationEnd() {
			node.classList.remove('animate__animated', ...animationName.split(' '));
			resolve('Animation ended');
		}

		node.addEventListener('animationend', handleAnimationEnd, { once: true });
	});
}
