function autoChangebg(){
	var num = Math.random()*200;
	if (num>146) {
		num=num-100;
	}
	//document.getElementsById('xx').background="img/lovewallpaper/5.jpg";
	num=Math.round(num);
	var name="img/lovewallpaper/"+num+".jpg";
	// alert(name);
	document.getElementById("body").background=name;

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
        window.location.href="m/index.html";
    }
    else{
    	autoChangebg();
    }
}