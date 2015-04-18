/** 
 * @projectDescription	Simple Equal Columns
 * @author 	Matt Hobbs
 * @version 	0.01 
 */
jQuery.fn.equalCols = function(){
	//Array Sorter
	var sortNumber = function(a,b){return b - a;};
	var heights = [];
	//Push each height into an array
	$(this).each(function(){
		heights.push($(this).height());
	});
	heights.sort(sortNumber);
	var maxHeight = heights[0];
	return this.each(function(){
		//Set each column to the max height
		$(this).css({'min-height': maxHeight});
	});
};
//Usage
jQuery(function($){
	//Select the columns that need to be equal e.g
	//$('div.column').equalCols();
	$('.fc-1,.fc-2,.fc-3,.fc-4').equalCols();
});

jQuery(function($){
	//Select the columns that need to be equal e.g
	//$('div.column').equalCols();
	$('#interior-content,#side-navigation').equalCols();
});