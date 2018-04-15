var timer2 = setInterval(OPlay, 3000);
var index2 = 0;
var $ulist = $(".comty_5 li");

function OPlay() {
	index2++;

	if(index2 == $ulist.size()) {
		index2 = 0;
	};
	$ulist.eq(index2).animate({
		left: 0
	}, 1500, function() {
		$(this).css("zIndex", 0).siblings().css({
			"zIndex": 1,
			"left": 278
		})
	});
}
$(".comty_5 ul").mouseenter(function(){
	clearInterval(timer2);
	$(".comty_5 p a").css("color","red")
	
}).mouseleave(function(){
	timer2=setInterval(OPlay, 3000)
	$(".comty_5 p a").css("color","")
})
