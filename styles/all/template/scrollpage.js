(() => {
	'use strict';

	const SCROLL_THRESHOLD = 25;
	const button = document.querySelector('.scroll-page');

	if (!button) {
		return;
	}

	// Hide phpBB's built-in scroll-to-top-button if it exists
	const phpbbButton = document.querySelector('.to-top-button');
	if (phpbbButton) {
		phpbbButton.style.display = 'none';
	}

	let isVisible = false;

	// Throttle scroll events for better performance
	let scrollTimeout;
	const handleScroll = () => {
		if (scrollTimeout) {
			return;
		}

		scrollTimeout = setTimeout(() => {
			scrollTimeout = null;
			const shouldShow = window.scrollY > SCROLL_THRESHOLD;

			if (shouldShow !== isVisible) {
				button.classList.toggle('visible', shouldShow);
				isVisible = shouldShow;
			}
		}, 100);
	};

	const scrollPage = (event) => {
		window.scrollTo({
			top: event.currentTarget.classList.contains('scroll-up') ? 0 : document.documentElement.scrollHeight,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', handleScroll, { passive: true });

	document.querySelectorAll('.scroll-page > i').forEach(icon => {
		icon.addEventListener('click', scrollPage);
	});
})();
