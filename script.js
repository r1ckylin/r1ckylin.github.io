var countdown = new Date('Sep 13 2020 00:00:00').getTime();

function birthday() {
    var now = new Date().getTime();
    var gap = countdown - now;

    var second = 1000;

    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));

    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    // console.log(s);
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

var myMusic = document.getElementById("music");
var scrolldelay;
function play() {
    myMusic.play();
    // pageScroll();
    scrolldelay = setInterval(pageScroll,1);
}

function pause() {
    myMusic.pause();
    window.scrollTo(0, 0);
    clearInterval(scrolldelay);
}

function pageScroll() {
    // window.scrollBy(0, 1);  // Best for mobile
    window.scrollBy(0, 3);

    // scrolldelay = setInterval(pageScroll,10);
    // scrolldelay = setTimeout(pageScroll,100);
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //show button
        document.getElementById("toTop").style.display = "block";
    } else {
        //hide button
        document.getElementById("toTop").style.display = "none";
    }
}

function scrollToTop() {
    pause();
}