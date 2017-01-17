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

function autoChangebg(){
	var num = Math.random()*11;
	// if (num>12) {
	// 	num=num-10;
	// }
	//document.getElementsById('xx').background="img/lovewallpaper/5.jpg";
	num=Math.round(num);
	var b="img/"+num+".jpg";
	// alert(name);
	document.getElementById("body").background=b;

}