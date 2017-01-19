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

function testDevice(){
var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
        autoChangebg();
    }
    else{
    	window.location.href="../index.html";
    }
}