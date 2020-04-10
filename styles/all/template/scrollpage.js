(function($) { // Avoid conflicts with other libraries

	'use strict';

	$(function() {
		var settings = {
				min: 25,
				scrollSpeed: 400
			},
			button = $('.scroll-page'),
			buttonHidden = true;

		$(window).on('scroll', function() {
			var pos = $(this).scrollTop();
			if (pos > settings.min && buttonHidden) {
				button.stop(true, true).fadeIn();
				buttonHidden = false;
			} else if (pos <= settings.min && !buttonHidden) {
				button.stop(true, true).fadeOut();
				buttonHidden = true;
			}
		});

		var scrollPage = function() {
			$('html, body').animate({
				scrollTop: ($(this).hasClass('scroll-up')) ? 0 : $(document).height()
			}, settings.scrollSpeed);
		};

		$('.scroll-page > i').on('click touchstart', scrollPage);
	});

})(jQuery);
