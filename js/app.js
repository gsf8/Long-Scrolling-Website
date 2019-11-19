
//coding from https://codepen.io/rachsmith/pen/PqPNqW//
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 1;


  square1.style.left = scrollPercent*window.innerWidth + 'px';
  square2.style.top = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
  square2.style.top = 800 + 'px';

});
