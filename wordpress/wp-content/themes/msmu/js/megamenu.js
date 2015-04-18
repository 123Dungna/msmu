// Item Name : Mega Menu Complete Set
// Item URI : http://codecanyon.net/item/mega-menu-complete-set/152825
// Author URI : http://codecanyon.net/user/Pixelworkshop/
// Version : 2.1



(function($){
	
	

	function megaMenuOver(e){
		
		var dropDown = $('.dropcontent, .fullwidth',this);
		var dropLength = $('.dropcontent, .fullwidth').length;
		var dropArray = [];
		for (var i = 0; i < dropLength; i++) {
			if (!$('.dropcontent, .fullwidth').eq(i).is($('.dropcontent, .fullwidth',this))) {
				dropArray.push('#' + $('.dropcontent, .fullwidth').eq(i).attr('id'));
			}
		}
		var otherDropDown = $('.dropcontent, .fullwidth');
	
		if(hoverIntentEffect === 'hover_fade'){
			$(dropDown).fadeIn(hoverIntentShow);
				$(this).hover(function() {
					$(dropDown).fadeOut(hoverIntentHide);
				});
		}
		else if(hoverIntentEffect === 'hover_slide'){
			$(dropDown).slideDown(hoverIntentShow);
				$(this).hover(function() {
					$(dropDown).slideUp(hoverIntentHide);
				});
		}
		else if(hoverIntentEffect === 'hover_toggle'){
			$(dropDown).animate({height: 'toggle', width: 'toggle', opacity: 'toggle'})(hoverIntentShow);
				$(this).hover(function() {
					$(dropDown).hide(hoverIntentHide);
				});
		}
		else if(hoverIntentEffect === 'click_fade'){
			$(this).click(function() {
				$(dropDown).fadeIn(hoverIntentShow); 
				$(this).hover(function() {
					$(dropDown).fadeOut(hoverIntentHide);
				});
			});
		}
		else if(hoverIntentEffect === 'click_slide'){
			$(this).click(function() {
				$(dropDown).slideDown(hoverIntentShow); 
				$(this).hover(function() {
					$(dropDown).slideUp(hoverIntentHide);
				});
			});
		}
		else if(hoverIntentEffect === 'hover_click_slide'){
			if ($(window).width() <= 880) {
/*
				$(this).off('click');
				$(this).click(function(e) {
					console.log(e.target.nodeName);
					if (dropDown.length > 0 && e.target.nodeName != 'A') e.preventDefault();
					$(dropArray.toString()).slideUp(hoverIntentHide);
					$(dropDown).slideDown(hoverIntentShow);
				});
*/
				//console.log(dropDown.length, e.target.nodeName);
				$(dropArray.toString()).slideUp(hoverIntentHide);
				$(dropDown).slideDown(hoverIntentShow);
				/*
$(dropDown).find('h4').off('click');
				$(dropDown).find('h4').click(function() {
					$(this).next().slideToggle(hoverIntentShow);
				});
*/
			} else {
				$(dropDown).fadeIn(hoverIntentShow);
				$(this).hover(function() {
					$(dropDown).fadeOut(hoverIntentHide);
				});
			}
		}
		else if(hoverIntentEffect === 'click_toggle'){
			$(this).click(function() {
				$(dropDown).show(hoverIntentShow); 
				$(this).hover(function() {
					$(dropDown).hide(hoverIntentHide);
				});
			});
		}
	
	}
	
	
	function megaMenuOut(){
		
		var dropDown = $('.dropcontent, .fullwidth',this);
		if ($(window).width() > 880) $(dropDown).hide();
		
	}
	
	
	function megaMenuClickOutside(){
		
		$(document).click(function(){
			$('.megamenu').children('li').removeClass('active');
			$('.dropcontent, .fullwidth').hide(0);
		});
		
		$('.megamenu').click(function(event){
			event.stopPropagation();
		});
		
	}



	$.fn.megaMenuCompleteSet = function(options){


		var options = $.extend({
			menu_speed_show : 300, // Time (in milliseconds) to show a drop down
			menu_speed_hide : 200, // Time (in milliseconds) to hide a drop down
			menu_speed_delay : 200, // Time (in milliseconds) before showing a drop down
			menu_effect : 'hover_fade', // Drop down effect, choose between 'hover_fade', 'hover_slide', 'click_fade', 'click_slide', 'open_close_fade', 'open_close_slide'
			menu_click_outside : 0, // Clicks outside the drop down close it (1 = true, 0 = false)
			menu_show_onload : 0, // Drop down to show on page load (type the number of the drop down, 0 for none)
		}, options);


		return this.each(function() {
			
			
			var	megaMenu = $(this),
				menuItem = $(megaMenu).children('li'),
				menuDropDown = $(menuItem).children('.dropcontent, .fullwidth');
	
			$('.dropcontent').css('left', 'auto').hide();
			$('.fullwidth').css('left', '-1px').hide();

			if(options.menu_click_outside === 1){
				megaMenuClickOutside();
			}
	
	
/*
			if (Modernizr.touch){
				
				$(menuItem).toggleClass('noactive');
				$(menuItem).bind('touchstart', function() {
					
					var $this = $(this);
					$this.siblings().addClass('noactive').removeClass('active').end().toggleClass('active').toggleClass('noactive');
					$this.siblings().find(menuDropDown).hide(0);
					$this.find(menuDropDown)
						.delay(options.menu_speed_delay)
						.toggle(0)
						.click(function(event){
							event.stopPropagation();
						});
					
				});
					
			}


			else
*/ if (options.menu_effect === 'hover_fade' || options.menu_effect === 'hover_slide' || options.menu_effect === 'hover_toggle' || options.menu_effect === 'click_fade' || options.menu_effect === 'click_slide' || options.menu_effect === 'hover_click_slide' || options.menu_effect === 'click_toggle'){
				
				hoverIntentEffect = options.menu_effect;
				hoverIntentShow = options.menu_speed_show;
				hoverIntentHide = options.menu_speed_hide;
				// HoverIntent Configuration
				var hoverIntentConfig = {
					sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
					interval: 100, // number = milliseconds for onMouseOver polling interval
					over: megaMenuOver, // function = onMouseOver callback (REQUIRED)
					timeout: 200, // number = milliseconds delay before onMouseOut
					out: megaMenuOut // function = onMouseOut callback (REQUIRED)
				};
				
				$(menuItem).hoverIntent(hoverIntentConfig);
	
			}


			else if (options.menu_effect === 'open_close_fade' || options.menu_effect === 'open_close_slide' || options.menu_effect === 'open_close_toggle'){
				
				$(menuItem + ':nth-child(' + options.menu_show_onload + ')')
					.children('.dropcontent, .fullwidth').show()
					.parent(menuItem).toggleClass('active');
				$(menuItem).unbind('mouseenter mouseleave');
			
				if (options.menu_effect == 'open_close_fade'){
		
					$(menuItem).click(function() {
						
						var $this = $(this);
						$this.siblings().removeClass('active').end().toggleClass('active');
						$this.siblings().find(menuDropDown).fadeOut(options.menu_speed_hide);
						$this.find(menuDropDown)
							.delay(options.menu_speed_delay)
							.fadeToggle(options.menu_speed_show)
							.click(function(event){
								event.stopPropagation();
						});
						
					});
		
				}
	
				else if (options.menu_effect === 'open_close_slide') {
		
					$(menuItem).click(function() {
						
						var $this = $(this);
						$this.siblings().removeClass('active').end().toggleClass('active');
						$this.siblings().find(menuDropDown).slideUp(options.menu_speed_hide);
						$this.find(menuDropDown)
							.delay(options.menu_speed_delay)
							.slideToggle(options.menu_speed_show)
							.click(function(event){
								event.stopPropagation();
							});
						
					});
										
				}
		
				else if (options.menu_effect === 'open_close_toggle') {
		
					$(menuItem).click(function() {
						
						var $this = $(this);
						$this.siblings().removeClass('active').end().toggleClass('active');
						$this.siblings().find(menuDropDown).hide(options.menu_speed_hide);
						$this.find(menuDropDown)
							.delay(options.menu_speed_delay)
							.toggle(options.menu_speed_show)
							.click(function(event){
								event.stopPropagation();
							});
						
					});
										
				}

	
			}
			
			
		}); // End each

		
	};

	
	
})(jQuery);

