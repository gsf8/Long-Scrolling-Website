var canvas = document.getElementById("canvas");

window.onscroll = function(){

  var distance = window.pageYOffset;




  if (distance > 300) {
    counter.style.top = 200 + distance;



  }else{
    counter.style.backgroundColor = "black";
    counter.style.top = 200 + distance + "px";
    }


    if (distance > 300 && distance < 600 ) {
    counter.style.left = 90 + "px";

  }else{
    counter.style.left = 600 - distance + "px";

    }


};
