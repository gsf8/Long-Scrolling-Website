var canvas = document.getElementById("canvas");

window.onscroll = function(){

  var distance = window.pageYOffset;


  if (distance < 800) {

  }
  else (distance > 800 && distance < 4000){
    carriage.style.left = distance * 1 + "px";
  }

};
