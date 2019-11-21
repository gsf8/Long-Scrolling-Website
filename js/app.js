
//coding from https://codepen.io/rachsmith/pen/PqPNqW//
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 1;


  square1.style.left = scrollPercent*window.innerWidth + 'px';



});
//coding from https://jsbin.com/waducab/3/edit?html,css,js,output//
var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");

window.onscroll = function(){


  var distance = window.pageYOffset;


  if (distance < 900) {
  counter.style.position="fixed"
  outfit.style.position="fixed"
}
else if (distance > 900){
  counter.style.left = 1100 - distance + "px";
  outfit.style.left =1100 - distance + "px";
}
else {
  counter.style.position = "absolute";
}


};
