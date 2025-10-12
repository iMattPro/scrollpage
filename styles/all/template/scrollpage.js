/**
 * Scroll Page Extension for phpBB
 *
 * Provides animated scroll-to-top and scroll-to-bottom buttons with:
 * - Auto-show/hide based on scroll position
 * - Auto-hide after 3 seconds of inactivity
 * - Automatic theme detection (light/dark)
 *
 * @copyright (c) 2025 Matt Friedman
 * @license GPL-2.0-or-later
 */
(() => {
	'use strict';

	const SCROLL_THRESHOLD = 25;
	const HIDE_DELAY = 3000;
	const THROTTLE_DELAY = 100;

	const button = document.querySelector('.scroll-page');
	if (!button) {
		return;
	}

	const scrollIcon = button.querySelector('i');
	const docElement = document.documentElement;

	// Hide phpBB's built-in button
	const phpbbButton = document.querySelector('.to-top-button');
	if (phpbbButton) {
		phpbbButton.style.display = 'none';
	}

	// Detect and apply dark theme
	if (scrollIcon && getComputedStyle(scrollIcon).backgroundColor === 'rgba(255, 255, 255, 0.4)') {
		const rgb = getComputedStyle(document.body).backgroundColor.match(/\d+/g);
		if (rgb && (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 < 128) {
			docElement.style.setProperty('--scroll-page-bg-color', 'rgba(0, 0, 0, 0.4)');
			docElement.style.setProperty('--scroll-page-arrow-color', '#ffffff');
			docElement.style.setProperty('--scroll-page-border-color', '#333333');
		}
	}

	let isVisible = false, isHovered = false, hideTimeout, scrollTimeout;

	const startHideTimer = () => {
		clearTimeout(hideTimeout);
		hideTimeout = setTimeout(() => {
			if (!isHovered) {
				button.classList.remove('visible');
				isVisible = false;
			}
		}, HIDE_DELAY);
	};

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
			if (shouldShow) {
				startHideTimer();
			}
		}, THROTTLE_DELAY);
	};

	const scrollPage = (e) => {
		window.scrollTo({
			top: e.currentTarget.classList.contains('scroll-up') ? 0 : docElement.scrollHeight,
			behavior: 'smooth'
		});
	};

	// Event listeners
	window.addEventListener('scroll', handleScroll, { passive: true });
	button.querySelectorAll('i').forEach(icon => icon.addEventListener('click', scrollPage));
	button.addEventListener('mouseenter', () => isHovered = true);
	button.addEventListener('mouseleave', () => {
		isHovered = false;
		if (isVisible) {
			startHideTimer();
		}
	});
})();
