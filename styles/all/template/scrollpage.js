(() => {
	'use strict';

	const SCROLL_THRESHOLD = 25;
	const button = document.querySelector('.scroll-page');

	if (!button) {
		return;
	}

	// Detect theme and set appropriate colors
	const detectTheme = () => {
		const scrollIcon = document.querySelector('.scroll-page i');
		if (!scrollIcon) {
			return;
		}

		const currentBg = getComputedStyle(scrollIcon).backgroundColor;
		if (currentBg !== 'rgba(255, 255, 255, 0.4)') {
			return;
		}

		const bodyBg = getComputedStyle(document.body).backgroundColor;
		const rgb = bodyBg.match(/\d+/g);

		if (rgb) {
			const [r, g, b] = rgb.map(Number);
			const brightness = (r * 299 + g * 587 + b * 114) / 1000;

			if (brightness < 128) {
				// Dark theme
				document.documentElement.style.setProperty('--scroll-page-bg-color', 'rgba(0, 0, 0, 0.4)');
				document.documentElement.style.setProperty('--scroll-page-arrow-color', '#ffffff');
				document.documentElement.style.setProperty('--scroll-page-border-color', '#333333');
			}
		}
	};

	detectTheme();

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
