'use strict';

const settings = {
	min: 25,
	scrollSpeed: 400,
	fadeSpeed: 300
};

let buttonHidden = true;
const button = document.querySelector('.scroll-page');

window.addEventListener('scroll', () => {
	const pos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	if (pos > settings.min && buttonHidden) {
		button.style.display = 'block'; // Show the button as a block element
		setTimeout(() => {
			button.style.opacity = '0.5'; // Fade in the button after it's visible
		}, 0);
		buttonHidden = false;
	} else if (pos <= settings.min && !buttonHidden) {
		button.style.opacity = '0'; // Fade out the button
		setTimeout(() => {
			button.style.display = 'none'; // Hide the button after it's fully transparent
		}, settings.fadeSpeed);
		buttonHidden = true;
	}
});

const scrollPage = (event) => {
	const isScrollUp = event.currentTarget.classList.contains('scroll-up');
	const scrollTop = isScrollUp ? 0 : document.documentElement.scrollHeight;
	window.scrollTo({
		top: scrollTop,
		behavior: 'smooth'
	});
};

const scrollPageIcons = document.querySelectorAll('.scroll-page > i');
scrollPageIcons.forEach(icon => {
	icon.addEventListener('click', scrollPage);
	icon.addEventListener('touchstart', scrollPage);
});
