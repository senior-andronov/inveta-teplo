// let callbackModal = document.querySelector(".callback__modal");
// let callbackBtn = document.querySelector(".callback__btn");
// let callbackCross = document.querySelector(".callback__modal-close");
// let callbackContent = document.querySelector(".callback__modal-content");

// callbackBtn.onclick = function () {
// 	callbackModal.classList.add('_active');
// 	animateCSS(callbackContent, 'animateTop');
// 	document.body.classList.add("active");
// }
// callbackCross.onclick = function () {
// 	callbackModal.classList.remove('_active');
// 	document.body.classList.remove("active");
// }

// let pricelistModal = document.querySelector(".pricelist__modal");
// let pricelistBtn = document.querySelectorAll(".pricelist__btn");
// let pricelistCross = document.querySelector(".pricelist__modal-close");

// pricelistBtn.forEach(btn => {
// 	btn.onclick = function () {
// 		pricelistModal.classList.add('_active');
// 		document.body.classList.add("active");
// 	}
// })

// pricelistCross.onclick = function () {
// 	pricelistModal.classList.remove('_active');
// 	document.body.classList.remove("active");
// }

// let privacyModal = document.querySelector(".privacy__modal");
// let privacyBtn = document.querySelectorAll(".privacy__btn");
// let privacyCross = document.querySelector(".privacy__modal-close");

// privacyBtn.forEach(btn => {
// 	btn.onclick = function () {
// 		privacyModal.classList.add('_active');
// 		document.body.classList.add("active");
// 	}
// })
// privacyCross.onclick = function () {
// 	if (callbackModal.classList.contains('_active') || feedbackModal.classList.contains('_active') || pricelistModal.classList.contains('_active')) {
// 		privacyModal.classList.remove('_active');
// 	} else {
// 		privacyModal.classList.remove('_active');
// 		document.body.classList.remove("active");
// 	}
// }

// let feedbackModal = document.querySelector(".feedback__modal");
// let feedbackBtn = document.querySelectorAll(".feedback__btn");
// let feedbackCross = document.querySelector(".feedback__modal-close");
// feedbackBtn.forEach(btn => {
// 	btn.onclick = function () {
// 		feedbackModal.classList.add('_active');
// 		document.body.classList.add("active");
// 	}
// })

// feedbackCross.onclick = function () {
// 	feedbackModal.classList.remove('_active');
// 	document.body.classList.remove("active");
// }

// window.onclick = function (event) {
// 	if (event.target == pricelistModal) {
// 		pricelistModal.classList.remove('_active');
// 		document.body.classList.remove("active");

// 	}
// 	if (event.target == callbackModal) {
// 		callbackModal.classList.remove('_active');
// 		document.body.classList.remove("active");
// 	}
// 	if (event.target == feedbackModal) {
// 		feedbackModal.classList.remove('_active');
// 		document.body.classList.remove("active");
// 	}
// 	if (event.target == privacyModal) {
// 		if (callbackModal.classList.contains('_active') || feedbackModal.classList.contains('_active') || pricelistModal.classList.contains('_active')) {
// 			privacyModal.classList.remove('_active');
// 		} else {
// 			privacyModal.classList.remove('_active');
// 			document.body.classList.remove("active");
// 		}
// 	}
// }


function modal() {
	const btns = document.querySelectorAll('.modal-button-js'),
		close = document.querySelectorAll('.modal__close');

	function checkModal() {
		const modal = document.querySelector(`#${this.dataset.modal}`);
		showModal(modal);
	}

	function showModal(parent) {
		const content = parent.querySelector('.modal__content');
		parent.classList.add('_active')
		animateCSS(content, 'animateTop');
		addClassBody();
	}

	function closeModal() {
		const modalActive = document.querySelector('.modal._active')
		animateCSS(modalActive, 'animateUp');
		modalActive.addEventListener('animationend', () => {
			modalActive.classList.remove('_active');
		}, { once: true })
		addClassBody();
	}

	function addClassBody() {
		(document.body.classList.contains('active')) ? document.body.classList.remove('active') : document.body.classList.add('active')
	}

	function searchModal(event) {
		if (event.target == document.querySelector('.modal._active')) closeModal()
	}

	btns.forEach(item => item.addEventListener('click', checkModal));
	close.forEach(item => item.addEventListener('click', closeModal));
	window.addEventListener('click', searchModal)
}
modal();


function animateCSS(element, animation) {
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