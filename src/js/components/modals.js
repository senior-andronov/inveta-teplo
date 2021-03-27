// Is Iphone?
const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);
// IOS Scroll Fix

// Выключение
let disableScroll = () => {
	let pagePosition = window.scrollY;
	document.querySelector('html').style.scrollBehavior = 'auto';
	document.body.classList.add('ios-lock');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

// Включение
let enableScroll = () => {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('ios-lock');
	window.scroll({ top: pagePosition, left: 0 });
	document.querySelector('html').removeAttribute('style');
	document.body.removeAttribute('data-position');
}

// -- //

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
		if (isiPhone || isiPad || isiPod) {
			disableScroll();
		}

		addClassBody();
		parent.classList.add('_active');
		overflow2.classList.add('_active');
		animateCSS(overflow2, 'animateFadeIn');
		animateCSS(content, 'animateTop');
	}

	function closeModal() {
		const parent = document.querySelector('.modal._active'),
			modalActiveContent = parent.querySelector('.modal__content'),
			modalActiveOverflow = parent.querySelector('.modal__overflow');
		animateCSS(modalActiveContent, 'animateUp');
		animateCSS(modalActiveOverflow, 'animateFadeOut');
		modalActiveContent.addEventListener('animationend', () => {
			parent.classList.remove('_active');
			if (isiPhone || isiPad || isiPod) { enableScroll(); }

			modalActiveOverflow.classList.remove('_active');
			addClassBody();
		}, { once: true })

	}


	function addClassBody() {
		if (document.querySelector('.modal._active')) return;
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