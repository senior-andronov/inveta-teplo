var jsTriggers = document.querySelectorAll('.cost__tabs-item'),
	jsContents = document.querySelectorAll('.cost__content');

jsTriggers.forEach(function (trigger) {
	trigger.addEventListener('click', function () {
		var id = this.getAttribute('data-tab'),
			content = document.querySelector('.cost__content[data-tab="' + id + '"]'),
			activeTrigger = document.querySelector('.cost__tabs-item._active'),
			activeContent = document.querySelector('.cost__content._active');

		activeTrigger.classList.remove('_active'); // 1
		trigger.classList.add('_active'); // 2

		activeContent.classList.remove('_active'); // 3
		content.classList.add('_active'); // 4
	});
});
