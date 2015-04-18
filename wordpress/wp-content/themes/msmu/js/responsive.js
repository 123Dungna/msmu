$(document).ready(function(){
	
	
	$('.megamenu').clone().appendTo($('#menuMobile'));
	
		
	$( "#menuBtn" ).click(function() {
	  $( "#menuMobile" ).slideToggle( "fast", function() {  });
	});
	
	$( "#menuMobile a" ).click(function() {
		$( "#menuMobile" ).slideToggle( "fast", function() {});
	});
	
	
	var breakPoint = 970; //Breakpoint value goes here
	var breakPointMobile = 754; //Breakpoint value goes here


	function orderElements() {
		if ($(window).width() > breakPoint) {  // if bigger than breakpoint
			
			$('.fc-2').insertAfter($('.fc-1'));
			$('#side-navigation').insertAfter($('#interior-content'));
		}
		if ($(window).width() < breakPoint) { // if tablet or smaller
		
			$('.fc-2').insertBefore($('.fc-1'));
			
			
			$('#side-navigation').appendTo($('#menuMobile'));
		}
		if ($(window).width() < breakPointMobile) { // if mobile 
		
			$('#right-column').insertAfter($('#main-content'));
			$('#copyright').insertAfter($('#main-content'));
			
		}
		if ($(window).width() > breakPointMobile) { // if bigger mobile 
			
			$('#right-column').insertBefore($('#main-content'));
		}
	}
	orderElements();  //run immediately
	$(window).resize(orderElements);  //run on resize
	
	
	
	
});