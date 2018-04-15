
var $Clist=$(".ff1 li");
var $Dlist=$(".mm1");
$Clist.mouseenter(function(){
	var index = $(this).index();
	$Dlist.eq(index)
		  .css("display","block")
		  .siblings(".mm1")
		  .css("display","none")
		  $Clist.eq(index).css("background","red").siblings().css("background","")
})

var $Elist=$(".ff2 li");
var $Flist=$(".mm2");
$Elist.mouseenter(function(){
	var index = $(this).index();
	$Flist.eq(index)
		  .css("display","block")
		  .siblings(".mm2")
		  .css("display","none")
		  $Elist.eq(index).css("background","red").siblings().css("background","")
})

var $list1=$(".ff3 li");
var $list2=$(".mm3");
$list1.mouseenter(function(){
	var index = $(this).index();
	$list2.eq(index)
		  .css("display","block")
		  .siblings(".mm3")
		  .css("display","none")
		  $list1.eq(index).css("background","red").siblings().css("background","")
})
var $list3=$(".ff4 li");
var $list4=$(".mm4");
$list3.mouseenter(function(){
	var index = $(this).index();
	$list4.eq(index)
		  .css("display","block")
		  .siblings(".mm4")
		  .css("display","none")
		  $list3.eq(index).css("background","red").siblings().css("background","")
})