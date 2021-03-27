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

// Слушатель
let scrollLock_BtnListener = (item) => {
	item.addEventListener('click', (e) => {
		item.classList.toggle('scroll')
		if (item.classList.contains('scroll')) {
			disableScroll();
		} else {
			enableScroll();
		}
	});
}

//Проверка с чего зашли на сайт, если ios, то подключаем скрипт, на нужный элемент
if (isiPhone || isiPad || isiPod) {
	scrollLock_BtnListener(item); // вместо item, нужный элемент, к примеру модалку, или бургер!
}