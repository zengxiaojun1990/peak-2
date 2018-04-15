$(window).load(function() {
		var tname = "",
			tpwd = "";
		var str = document.cookie; //  
		var arr = str.split("; ");
		for(var i = 0; i < arr.length; i++) {
			var item = arr[i].split("=");
			if(item[0] == "uname") {
				tname = item[1];
			}
			if(item[0] == "upwd") {
				tpwd = item[1];
			}
		}
		$("#log").click(function() {
			var iname = $("#hname").val();
			var ipwd = $("#hpwd").val();
			if(tname == iname && tpwd == ipwd) {
				location.href="index.html"
			} else {
				alert("用户名或密码错误");
			}
		
		})
	})