import tippy from 'tippy.js';

tippy('._tooltip', {
	content(reference) {
		const id = reference.getAttribute('data-template');
		const template = document.getElementById(id);
		return template.innerHTML;
	},
	allowHTML: true,
	trigger: "click",
	interactive: true
});



