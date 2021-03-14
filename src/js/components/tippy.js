import tippy, { followCursor } from 'tippy.js';


const template = document.querySelector('.feedback__tooltip');
template.style.display = 'block';

tippy('._tooltip-feedback', {
	content: template,
	trigger: "click",
	maxWidth: 400,
	// placement: 'right-start',
	interactive: true,
	arrow: false,
});



tippy('._tooltip-services', {
	content: "Зависит от необходимости подготовки основания, монтажа утеплителя и шага укладки труб",
	trigger: "click",
	maxWidth: 250,

});