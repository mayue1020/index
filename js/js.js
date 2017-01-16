function getOpacity() {
	// body...
	var a = document.getElementById("baidu-search");
	a.style="opacity: 1";
}

function loseOpacity(){
	var a = document.getElementById("baidu-search");
	a.style="opacity:0.5";
}

function search(){
	var a = document.getElementById("search");
	var b = a.value;
	window.location.href='https://www.baidu.com/s?ie=UTF-8&wd='+b;
}