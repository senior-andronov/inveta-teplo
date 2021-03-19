function modal() {
	const btns = document.querySelectorAll('.modal__button-js'),
		close = document.querySelectorAll('.modal__close'),
		overflow = document.querySelectorAll('.modal__overflow');

	function checkModal() {
		const modal = document.querySelector(`#${this.dataset.modal}`);
		showModal(modal);
	}

	function showModal(parent) {
		const content = parent.querySelector('.modal__content'),
			overflow2 = parent.querySelector('.modal__overflow');
		parent.classList.add('_active');
		overflow2.classList.add('_active');
		animateCSS(overflow2, 'animateFadeIn');
		animateCSS(content, 'animateTop');
		addClassBody();
	}

	function closeModal() {
		const parent = document.querySelector('.modal._active'),
			modalActiveContent = parent.querySelector('.modal__content'),
			modalActiveOverflow = parent.querySelector('.modal__overflow');
		animateCSS(modalActiveContent, 'animateUp');
		animateCSS(modalActiveOverflow, 'animateFadeOut');
		modalActiveContent.addEventListener('animationend', () => {
			parent.classList.remove('_active');
			modalActiveOverflow.classList.remove('_active');
		}, { once: true })
		addClassBody();
	}

	function addClassBody() {
		(document.body.classList.contains('active')) ? document.body.classList.remove('active') : document.body.classList.add('active')
	}

	btns.forEach(item => item.addEventListener('click', checkModal));
	close.forEach(item => item.addEventListener('click', closeModal));
	overflow.forEach(item => item.addEventListener('click', closeModal));
}
modal();


function animateCSS(element, animation) {
	const animationName = animation;
	const node = (element.nodeType === 1) ? element : document.querySelector(element);

	node.classList.add(...animationName.split(' '));

	function handleAnimationEnd() {
		node.classList.remove(...animationName.split(' '));
	}

	node.addEventListener('animationend', handleAnimationEnd, { once: true });
}