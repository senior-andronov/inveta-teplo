function accordion() {
	document.querySelectorAll('.services__item:nth-child(n + 5)').forEach(item => item.classList.toggle('_hidden'));
}
accordion();
document.querySelector(".services__btn").addEventListener("click", () => {
	accordion();
	addClassss.call(document.querySelector(".services__btn"))
});

function addClassss() {
	if (this.classList.contains('_active')) {
		this.classList.remove('_active')
		this.textContent = 'Еще +'
	} else {
		this.classList.add('_active')
		this.textContent = 'Свернуть'
	}
}

// function reviewsOpen() {
// 	const link = document.querySelectorAll('.services__content'),
// 		openLink = item => {
// 			const text = item.previousElementSibling;
// 			if (text.classList.contains('_hidden')) {
// 				text.style.maxHeight = text.scrollHeight + 'px';
// 				text.addEventListener('transitionend', () => text.classList.remove('_hidden'))
// 			} else {
// 				text.classList.add('_hidden');
// 				text.style.maxHeight = 144 + 'px';
// 				text.addEventListener('transitionend', () => text.classList.add('_hidden'));
// 			}
// 		};
// 	link.forEach(item => item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		e.stopPropagation();
// 		openLink(item);
// 	}))
// }
// reviewsOpen()