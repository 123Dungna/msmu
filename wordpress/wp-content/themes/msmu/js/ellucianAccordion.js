//accordion
(function ($) {
	$.fn.accordion = function (options) {
		var opts = $.extend({}, $.fn.accordion.defaults, options);
		return this.each(function () {
			$thisAccordion = $(this);
			// build element specific options (using jquery 1.6+ for html5 data attribs )
			var o = $.extend({}, opts, $thisAccordion.data());
			$.fn.accordion.initialize($thisAccordion, o);
		});
	};

	$.fn.accordion.defaults = {
		speed: 500
	};

	$.fn.accordion.initialize = function ($thisAccordion, o) {
	    $thisAccordion.find('.itemContainer').each(function () {
	        $(this).css('min-height', 10);
	    });
		$thisAccordion.find('.itemToggle').click(function () {
			$.fn.accordion.expand($(this), $thisAccordion, o);
		});
		if (typeof (o.defaultItem) != 'undefined') {
			var $defaultedItem = $thisAccordion.find('.itemToggle').eq(o.defaultItem);
			$.fn.accordion.expand($defaultedItem, $thisAccordion, o);
		}
	};

	$.fn.accordion.expand = function (toggleElement, $thisAccordion, o) {
		$thisAccordion.find('.itemset').removeClass('active');
		$thisAccordion.find('.itemContainer').slideUp(o.speed);
		if (toggleElement.next('.itemContainer').is(':hidden')) {
			toggleElement.parent('.itemset').addClass('active');
			toggleElement.next('.itemContainer').slideDown(o.speed);
		}
	};
})(jQuery);
$(document).ready(function () {
	$('.accordion').accordion();
	
	// function added for lp-content sidebar-nav toggle slide below 640px wide
	/*$('div.lp-content .sidebar-nav h2').click(function() {
		if ($(window).width() <= 640) $(this).next('ul').slideToggle(300);
	});*/
	
	function sideNav() {
		$('#sideMenu, #one-column #main-content .PBViewing[style*="235"]:first-of-type .PBItem > div span:first-of-type, .content #one-column #cal-navigation #calMenu').click(function() {
			$menu = ($(this).attr('id') == 'sideMenu') ? $(this).parent() : $(this).parents('.PBViewing');
			if ($menu.hasClass('open')) {
				w = ($(window).width() <= 640) ? -265 : -295;
				//console.log(w);
				$menu.animate(
					{
						left: w
					},
					200,
					function() {
						$(this).removeClass('open');
						$('#sideMenu').html('menu');
					}
				)
			} else {
				$menu.animate(
					{
						left: 0
					},
					300,
					function() {
						$(this).addClass('open');
						$('#sideMenu').html('close');
					}
				)
			}
		})
	}
	sideNav();
	
	$('.content #one-column #main-content').click(function() {
		setTimeout(function() {
			$('#sideMenu, #one-column #main-content .PBViewing[style*="235"]:first-of-type .PBItem > div span:first-of-type, .content #one-column #cal-navigation #calMenu').off('click');
			sideNav();
		}, 2000);
	})
	
});

var style = [];
var slideHeight;
var narrow = false;
var buttons;

$(window).resize(function() {
	//console.log('resize');
	if ($(window).width() <= 1000) {
		$('.callbacks_container [class*="slides"]').each(function(i) {
			slideHeight = $(this).find('li:visible img').height() + 'px !important';
			$(this).attr('style', 'height: ' + slideHeight);
		});
		//console.log(slideHeight);
	} else {
		if (style != undefined) $('.callbacks_container [class*="slides"]').attr('style', style);
	}
	if ($(window).width() <= 640 && !narrow) {
		buttons = $('.button-container').filter(':visible').html();
		$('.button-container').hide();
		// added hash '#' in front of id name otherwise the system deletes it.
		if (buttons) $('#main-content').prepend('<div id="#button-container-m">' + buttons + '</div>');
		
		rightColumn = $('#right-column').detach();
		$('#main-content').after(rightColumn);
		narrow = true;
	} else if ($(window).width() > 640 && narrow) {
		$('#main-content div[id*="button-container"]').remove();
		$('.button-container').show();
		
		rightColumn = $('#right-column').detach();
		$('#main-content').before(rightColumn);
		narrow = false;
	}
});
$(window).on('load', function() {
	//console.log('load');
	if ($(window).width() <= 1000) {
		$('.callbacks_container [class*="slides"]').each(function(i) {
			style.push($(this).attr('style'));
			slideHeight = $(this).find('li:visible img').height() + 'px !important';
			$(this).attr('style', 'height: ' + slideHeight);
		});
	}
	if ($(window).width() <= 640 && !narrow) {
		buttons = $('.button-container').filter(':visible').html();
		$('.button-container').hide();
		// added hash '#' in front of id name otherwise the system deletes it.
		if (buttons) $('#main-content').prepend('<div id="#button-container-m">' + buttons + '</div>');
		
		rightColumn = $('#right-column').detach();
		$('#main-content').after(rightColumn);
		narrow = true;
	} else if ($(window).width() > 640 && narrow) {
		$('#main-content div[id*="button-container"]').remove();
		$('.button-container').show();
		
		rightColumn = $('#right-column').detach();
		$('#main-content').before(rightColumn);
		narrow = false;
	}
});