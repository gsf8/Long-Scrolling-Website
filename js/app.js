
//coding from https://codepen.io/rachsmith/pen/PqPNqW//
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

//coding reference from https://jsbin.com/waducab/3/edit?html,css,js,output//
var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var twelve = document.getElementById("twelve");


window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 1;

  // var distance = window.pageYOffset;


  console.log(scrollTop);

  // square1.style.left = scrollPercent*window.innerWidth + 'px';

  counter.style.top = scrollTop + 'px';
  baby.style.top = scrollTop + 'px';
//   if (scrollTop < 900) {
//   counter.style.position="fixed"
//   baby.style.position="fixed"
// }
// else if (scrollTop > 900){
//   counter.style.left = 1100 - scrollTop + "px";
//   baby.style.left =1100 - scrollTop + "px";
// }
// else {
//   counter.style.position = "absolute";
// }


switch (true) {

  case (scrollTop < 100):
  counter.style.top = "100px";
  baby.style.top="130px";
  break;

  case (scrollTop < 900):


  break;

  case (scrollTop < 1100):
  counter.style.left = 1100 - scrollTop * 1.3 + "px";
  baby.style.left =1100 - scrollTop * 1.3 + "px";
  break;

  case (scrollTop < 2500):
  twelve.style.right = 2500 - scrollTop * 1.3 + "px";

  break;


  case (scrollTop < 8000):
  twelve.style.left = 8000 + scrollTop * 1.3 + "px";

  break;

  default:
  counter.style.position = "absolute";
  baby.style.position="absolute";
  twelve.style.position="absolute";
}



});
