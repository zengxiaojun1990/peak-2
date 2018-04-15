var index = 0;
var timer = setInterval(autoPlay, 2000)
function autoPlay() {
	index++;
	if(index == $(".banner ul li").size()) {
		index = 0;
	}
	$(".banner ul li").eq(index).addClass("current").siblings().removeClass("current");
	$(".tp a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
}
$(".banner").mouseenter(function() {
	$(".banner .bz").css("display", "block")
	clearInterval(timer)
}).mouseleave(function() {
	timer = setInterval(autoPlay, 2000);
	$(".banner .bz").css("display", "none")
})
$(".banner ul li").mouseenter(function() {
	
	index = $(this).index() - 1;
	autoPlay();
})
$(".banner span").click(function(){
	autoPlay()
	
})
$(".banner p").click(function(){
	index--;
	if(index ==0 ) {
		index = $(".banner ul li").size();
	}
	$(".banner ul li").eq(index).addClass("current").siblings().removeClass("current");
	$(".tp a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
})
//
$(".fix").mouseenter(function(){
	$(this).stop().animate({"right":0},500)
}).mouseleave(function(){
	$(this).stop().animate({"right":-40},500)
})
