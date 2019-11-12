var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");

window.onscroll = function(){

  var distance = window.pageYOffset;


  counter.innerHTML = distance + "px";

  if (distance > 300) {
    counter.style.backgroundColor = "green";
    counter.style.top = 200 + distance * 0.9 + "px";



  }else{
    counter.style.backgroundColor = "blue";
    counter.style.top = 200 + distance + "px";
    }


    if (distance > 300 && distance < 600 ) {
    counter.style.left = 90 + "px";

  }else{
    counter.style.left = 600 - distance + "px";

    }
