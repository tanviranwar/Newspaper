(function ($) {
	"use strict";
	/*-------------
	jQuery MeanMenu
	------------------*/
	jQuery('nav#dropdown').meanmenu();
	
	/*---------------
	wow js
	-----------------*/
	new WOW().init();
	
	/*---------------
	owl active
	----------------*/
	$ ("#owl-demo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet : [768,2],
		itemsMobile : [479,1],
	});
	
	/*-------------------
	scrollup
	--------------------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angel-up"></i>',
		easeingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
	});
	
})(jQuery);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	