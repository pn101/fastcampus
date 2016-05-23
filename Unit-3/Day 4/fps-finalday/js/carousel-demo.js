(function($){
	'use strict';

	// console.log( $ === jQuery);
	var $carousel = $('.carousel-demo');
	$carousel.addClass('ui-carousel');
	$carousel.attr({'role': 'region', 
					'area-labelledby': 'carousel-title'
				});
	var $carousel_headline = $('<h2>', {
		'id': 'carousel-title'
	}).text('Carousel').prependTo($carousel);
	
	var $carousel_panels_wrapper = $('<div>', {
		'attr': {
			'class': 'tabpanel-list',
			'role': 'group'
		}
	})
})(this.jQuery);

