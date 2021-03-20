import tippy from 'tippy.js';

const servicesTooltip = document.querySelector('.services__tooltip');
servicesTooltip.style.display = 'block';

tippy('._tooltip-services', {
	content: servicesTooltip,
	trigger: "click",
	maxWidth: 250,
});

const feedbackTooltip = document.querySelector('.feedback__tooltip');
feedbackTooltip.style.display = 'block';

tippy('._tooltip-feedback', {
	content: feedbackTooltip,
	trigger: "click",
	maxWidth: 400,
	interactive: true,
	arrow: false,
});

const feedbackTooltipTwo = document.querySelector('.feedback__tooltip-two');
feedbackTooltipTwo.style.display = 'block';

tippy('._tooltip-feedback-two', {
	content: feedbackTooltipTwo,
	trigger: "click",
	maxWidth: 400,
	interactive: true,
	arrow: false,
});


