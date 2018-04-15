$(".regist").click(function() {
	$(".rgswrp").css("display", "block")
})
$(".outer").click(function() {
	$(".rgswrp").css("display", "none")
})
$(".rgs>ul li").click(function() {
	$(this).addClass("light").siblings().removeClass("light")
	var index = $(this).index();
	$(".dige").eq(index).css("display", "block").siblings(".dige").css("display", "none")
})
//$(".resg").click(function() {
//	var ajax = new XMLHttpRequest();
//	var uname = $(".sname")
//	var upwd =$(".spwd")
//	var data = `status=register&userID=${uname.placeholder}&password=${upwd.placeholder}`;
//	ajax.open("GET", "http://datainfo.duapp.com/shopdata/userinfo.php?" + data);
//	ajax.send();
//	ajax.onreadystatechange = function() {
//		if(ajax.status == 200 && ajax.readyState == 4) {
//			switch(ajax.responseText) {
//				case "0":
//					alert("已有賬戶");
//					break;
//				case "1":
//					alert("可以使用");
//					break;
//				case "2":
//					alert("出错了");
//					break;
//			}
//		}
//	}
//})
//$(".resg").on({
//	"click": function() {
//		//		document.cookie = "uname=" + $(".sname").val();
//		//		document.cookie = "upwd=" + $(".spwd").val();
//		//		str = document.cookie;
//		//		arr = str.split("; ");
//		location.href = "login.html"
//	}
//})
var flagName = null;
$(".sname").blur(function(){
	var reg=/^1{1}[3578]{1}\d{9}$/;
	if(reg.test($(this).val() ) ){
		$("#s1").html("可以")
		flagName=true;
	}else{
		$("#s1").html("不合適")
		flagName=false;
	}
})
var flagPwd = null;
$(".spwd").blur(function(){
	var reg=/^[A-Za-z]{1,}.{5,}$/;
	if(reg.test($(this).val() ) ){
		$("#s2").html("可以")
		flagPwd = true;
	}else{
		$("#s2").html("不合適")
		flagPwd=false;
	}
})
var flagPwds = null;
$(".zzh").blur(function(){
	if( $(this).val() == $(".spwd").val() ){
		$("#s5").html("一樣")
		flagPwds=true;
	}else{
		$("#s5").html("不一樣")
		flagPwds=false;
	}
})
$(".resg").click(function() {
	document.cookie = "uname=" + $(".sname").val();
	document.cookie = "upwd=" + $(".spwd").val();
	if(flagName && flagPwd && flagPwds){
		location.href = "login.html"
	}else{
		alert("錯誤")
	}
	
})
$(".fuk").each(function(){
	
	$(this).on({"focus":function(){
	
	$(this).val("")
	
}
})
})