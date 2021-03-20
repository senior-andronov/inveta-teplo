import IMask from 'imask';

document.querySelectorAll('input[type=tel]').forEach((tel) => {
	const mask = IMask(tel, {
		mask: '+{7} (000) 000-00-00'
	});
});
