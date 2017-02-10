/*
 * Copyright (c) 24/04/2013 MyPassion
 * Author: MyPassion 
 * This file is made for NEWS
*/

	

// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	"use strict";
	var msg;
	$.post('plugin/sendmail.php',$('#contactForm').serialize(), function(msg) {
		$(".alertMessage").html(msg);
	});
	// Hide previous response text
	$(msg).remove();
	// Show response message
	contactform.prepend(msg);
}
jQuery(function(){
	// -----------------------------------------------------  FLEXSLIDER
	jQuery('.flexslider').flexslider({
		animation: 'fade',
		controlNav: false,
		slideshowSpeed: 4000,
		animationDuration: 300
	});	
	
})

jQuery(function(){
	jQuery('#carousel').carouFredSel({
		width: '100%',
		direction   : "bottom",
		scroll : 400,
		items: {
			visible: '+3'
		},
		auto: {
			items: 1,
			timeoutDuration : 4000
		},
		prev: {
			button: '#prev1',
			items: 1
		},    
		next: {
			button: '#next1',
			items: 1
		}
	});
});

jQuery(document).ready(function(){		
	"use strict";

// -----------------------------------------------------  UI ELEMENTS
	jQuery( "#accordion" ).accordion({
		heightStyle: "content"
	});
	
	jQuery( "#tabs" ).tabs();
	
	jQuery( "#tooltip" ).tooltip({
		position:{
			my: "center bottom-5",
			at: "center top"	
		}	
	});
	
	
// -----------------------------------------------------  UI ELEMENTS	
	jQuery('#nav ul.sf-menu').mobileMenu({
		defaultText: 'Go to ...',
		className: 'device-menu',
		subMenuDash: '&ndash;'
	});
	
	
// -----------------------------------------------------  NOTIFICATIONS CLOSER
	jQuery('span.closer').click(function(e){
		e.preventDefault();
		jQuery(this).parent('.notifications').stop().slideToggle(500);
	});
});