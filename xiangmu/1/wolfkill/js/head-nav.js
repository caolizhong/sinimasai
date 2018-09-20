$(".card-show").click(function(){
		$(".mmma").slideDown()
	})
	$(".mmma").click(function(){
		$(this).slideUp()
	})
	$(".head li").hover(function(){
		$(this).find("div").slideDown()
	},function(){
		$(this).find("div").slideUp()
	})