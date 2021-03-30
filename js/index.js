/*
*
*
*
*
*/


function detectOS() {
    const platform = navigator.platform.toLowerCase(),
        iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

    if (platform.includes('mac')) {
        document.getElementById("ic-so").addClass("fab fa-windos")
        return 'MacOS';
    }
    if (iosPlatforms.includes(platform)) {
        return 'iOS';
    }
    if (platform.includes('win')) {
        return 'Windows';
    }
    if (/android/.test(navigator.userAgent.toLowerCase())) {
        return 'Android';
    }
    if (/linux/.test(platform)) {
        return 'Linux';
    }

    return 'unknown';
}

console.log(detectOS());
var os = document.getElementById("os");
var icso = document.getElementById("icso");
var ic = document.querySelectorAll(".c-map-icon");

os.innerHTML = detectOS();

function sod(){
    if(detectOS() === "Windows"){
        icso.classList.remove("fa-android");
        icso.classList.remove("fa-linux");
        icso.classList.remove("fa-apple");
    }else if(detectOS() === "MacOS"){
        icso.classList.remove("fa-android");
        icso.classList.remove("fa-linux");
        icso.classList.remove("fa-windows");
    }else if(detectOS() === "iOS"){
        icso.classList.remove("fa-android");
        icso.classList.remove("fa-linux");
        icso.classList.remove("fa-windows");
    }else if(detectOS() === "Android"){
        icso.classList.remove("fa-linux");
        icso.classList.remove("fa-windows");
        icso.classList.remove("fa-apple");
    }else if(detectOS() === "Linux"){
        icso.classList.remove("fa-windows");
        icso.classList.remove("fa-windows");
        icso.classList.remove("fa-apple");
    }
}

sod();

/*
*
*
*
*
*/
var sw = window.outerWidth;
var sh = window.outerHeight;
var screen = sw + " x " +  sh;

document.getElementById("screen").innerHTML = screen;

/*
*
*
*
*
*/
var getBrowserInfo = function() {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null)
        return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

console.log(getBrowserInfo());
document.getElementById("browser").innerHTML = getBrowserInfo();


/*
*
*
*
*
*/

var map = document.getElementById("information");

function showInfo() {
    map.style.display = "block";
}

function hiddenInfo(){
    map.style.display = "none";
}

