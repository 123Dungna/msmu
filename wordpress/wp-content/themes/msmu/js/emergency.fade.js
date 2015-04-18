$(document).ready(function(){
	
	
	if ($.cookie('alert') == undefined) {
		$('#emergency').animate({ opacity: "show" }, "slow");
		$("#emergency .delete-x").click(function(){
			$(this).parents("#emergency").animate({ opacity: "hide" }, "slow");
			$.cookie("alert", "alertViewed", { path: '/' });
			//alert($.cookie("alert"));
		});
	}

	
});