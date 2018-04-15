
$(".bs").click(function(){
	$("body,html").animate({"scrollTop":0},1000)
})
var flag=true;
$(window).scroll(function() {
	
	var h = 365;
	var sTop = $(document).scrollTop()
	
		$flr=$(".floor").filter(function(){
			return Math.abs($(this).offset().top-sTop)<$(this).outerHeight()/2;
		})
		if($flr.index() !=-1){
			$(".louti li:not(:last)").eq($flr.index())
									 .addClass("show_l")
									 
									 .siblings("li")
									 .removeClass("show_l")
		}else{
			$(".louti li").removeClass("show_l")
		}
	
	if(sTop > h) {
		$(".nav").css("position", "fixed");
		$(".nav").css("top", 0);
		$(".claf").css("display", "none")
		$(".nav").css("z-index", 100);
		$(".louti").css("display","block")
	} else {
		$(".nav").css("position", "")
		$(".claf").css("display", "block")
		$(".nav").css("z-index", "")
		$(".louti").css("display","none")
	}
})
$(".louti li").mouseenter(function(){
	$(this).stop().css({"cursor":"pointer"}).animate({width:100},700)
	
}).mouseleave(function(){
	$(this).stop().animate({width:18},1000)
})

$(".louti li:not(:last)").click(function(){
	flag=false;
	var divTop=$(".floor").eq($(this).index()).offset().top-$(".nav").height();
	$("body,html").animate({"scrollTop":divTop},500,function(){
		flag=true;
	});
	$(this).addClass("show_l").siblings("li").removeClass("show_l")
})
