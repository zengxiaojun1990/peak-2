$(".xq_red li").click(function(){
	$(this).addClass("show_red").siblings().removeClass("show_red")
	var index=$(this).index();
	$(".main").eq(index).css("display","block").siblings(".main").css("display","none")
	$(".content li").eq(index).addClass("light_r").siblings("li").removeClass("light_r")
})
$(window).scroll(function(){
	var h=2100;
	var sTop=$(document).scrollTop();
	if(sTop>h){
		$(".nav_1").css({"display":"block","position":"fixed","top":0})
	}else{
		$(".nav_1").css({"display":"none","position":""})
	}
})

