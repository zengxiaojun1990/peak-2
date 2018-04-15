$(".sech>ul li").mouseenter(function(){
	$(this).addClass("show11").siblings("li").removeClass("show11")
	var index=$(this).index();
	switch(index){
		case 0 :$(".same").eq(0).css("display","block").siblings(".same").css("display","none");break;
		case 2 :$(".same").eq(1).css("display","block").siblings(".same").css("display","none");break;
		case 3:$(".same").eq(2).css("display","block").siblings(".same").css("display","none");break;
		case 4 :$(".same").eq(3).css("display","block").siblings(".same").css("display","none");break;
		default:
			$(".same").css("display","none");break;
	}
}).mouseleave(function(){
	$(".same").css("display","none")
})
$(".content li").click(function(){
	var index=$(this).index();
	$(this).addClass("light_r").siblings("li").removeClass("light_r")
	$(".main").eq(index).css("display","block").siblings(".main").css("display","none")
	$(".xq_red li").eq(index).addClass("show_red").siblings().removeClass("show_red")
})
