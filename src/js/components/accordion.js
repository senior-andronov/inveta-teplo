function showText() {
	if (this.classList.contains('_active')) {
		this.classList.remove('_active')
		this.textContent = 'Еще +'
	} else {
		this.classList.add('_active')
		this.textContent = 'Свернуть'
	}
}

const button = document.querySelector('.services__btn');
const container = document.querySelectorAll('._hide');

button.addEventListener('click', () => {
	container.forEach(item => {
		if (item.classList.contains('show')) {
			item.classList.remove('show');
			item.style.maxHeight = 0;
			item.style.marginBottom = 0;
			item.style.opacity = 0;
		} else {
			item.classList.add('show');
			item.style.maxHeight = item.scrollHeight + 'px';
			item.style.marginBottom = 50 + 'px';
			item.style.opacity = 1;
		}
	})
	showText.call(button);
});

