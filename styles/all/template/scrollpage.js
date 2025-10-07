(function() {
	'use strict';

	const settings = {
		min: 25
	};

	let buttonHidden = true;
	const button = document.querySelector('.scroll-page');

	window.addEventListener('scroll', () => {
		const pos = window.scrollY || document.documentElement.scrollTop;
		if (pos > settings.min && buttonHidden) {
			button.classList.add('visible');
			buttonHidden = false;
		} else if (pos <= settings.min && !buttonHidden) {
			button.classList.remove('visible');
			buttonHidden = true;
		}
	});

	const scrollPage = (event) => {
		window.scrollTo({
			top: event.currentTarget.classList.contains('scroll-up') ? 0 : document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	};

	const scrollPageIcons = document.querySelectorAll('.scroll-page > i');
	scrollPageIcons.forEach(icon => {
		icon.addEventListener('click', scrollPage);
	});
})();
