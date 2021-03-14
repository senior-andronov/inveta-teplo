import tippy, { followCursor } from 'tippy.js';


const template = document.querySelector('.feedback__tooltip');
template.style.display = 'block';

tippy('._tooltip', {
	content: template,
	hideOnClick: true,
	trigger: "click",
	maxWidth: 250,
});
tippy('._tooltip-services', {
	content: "Зависит от необходимости подготовки основания, монтажа утеплителя и шага укладки труб",
	hideOnClick: true,
	trigger: "click",
	maxWidth: 250,
});