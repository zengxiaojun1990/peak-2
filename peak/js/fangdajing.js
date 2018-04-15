$(".sss img").click(function(){
	var index=$(this).index();
	$(".small img").eq(index).show().siblings("img").hide();
	$(".big img").eq(index).show().siblings("img").hide();
})
$(".small").mouseenter(function(){
	$(".big").css("display","block");
	$(".mast").css("display","block");
}).mouseleave(function(){
	$(".big").css("display","none");
	$(".mast").css("display","none");
});

$(".small").on({"mousemove":function(evt){
	var e= evt || event;
	var x=e.pageX-$(".small").offset().left-$(".mast").width()/2;
	var y=e.pageY-$(".small").offset().top-$(".mast").height()/2;
	var mx=$(".small").width()-$(".mast").width();
	var my=$(".small").height()-$(".mast").height();
	x= x<=0 ? 0 : x>=mx ? mx : x;
	y= y<=0 ? 0 : y>=my ? my : y;
	var bigImagesX= -x*$(".big img").width()/$(".small img").width();
	var bigImagesY= -y*$(".big img").height()/$(".small img").height();
	$(".mast").css({
		"left":x+"px",
		"top":y+"px"
	})
	$(".big img").css({
				"left" : bigImagesX+"px",
				"top" : bigImagesY+"px"
			})
}
})
$("#sum_l").click(function(){
	$(this).val()
	
})
