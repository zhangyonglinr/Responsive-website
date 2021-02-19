var btn = document.querySelector('#head button');
var ul = document.querySelector('#head ul');
var display = true;

btn.onclick = function () {
    ul.style.height = display ? '250px' : '0';
    display = !display;
};


var pic = document.querySelector('#pic');
var picUl = document.querySelector('#pic ul');
var picLis = picUl.children;
var cn = 0;

var head = picUl.firstElementChild.cloneNode(true);
picUl.appendChild(head);
picUl.style.width = picLis.length * 100 + 'vw';

function move() {
    picUl.style.transition = 'left .5s';
    picUl.style.left = -cn * 100 + 'vw';
}

picUl.addEventListener('transitionend', function () {
    if (cn == picLis.length - 1) {
        picUl.style.transition = '';
        picUl.style.left = 0;
        cn = 0;
    }
});

function autoPlay() {
    cn++;
    // var hn = (cn + 1) % picLis.length;

    if (cn > picLis.length) {
        cn = 0;
    }
    move();

    console.log(cn);
}
var timer = setInterval(autoPlay, 2000);

pic.onmouseenter = function () {
    clearInterval(timer);
    timer = null;
}
pic.onmouseleave = function () {
    timer = setInterval(autoPlay, 2000);
};

document.addEventListener('visibilitychange',function(){
    /*
         visibilitychange   能见度改变事件，当页面隐藏或显示的时候会被触发
        document.hidden
            true    页面隐藏
            false   页面显示
     */

     if(document.hidden){
        clearInterval(timer);
        timer=null;
     }else{
        timer = setInterval(autoPlay, 2000);
     }
})





