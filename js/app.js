var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){

  var y = window.pageYOffset;


    //console.log("scale = " +y/1000 + 1);
  console.log(y);

  icon.style.transform="scale("+y/20000+")";

  icon.style.top = 200 + y + "px";


  icon.innerHTML = y + "px";



  if(y > 1000){
    icon.src="../images/zero.png"

   }else{
   icon.src="../images/baby.png";

   }
   if(y > 5000){
     icon.src="../images/four.png"


    }
    if(y > 8000){
      icon.src="../images/ten.png"


     }
     if(y > 11000){
       icon.src="../images/sixteen.png"
       icon.style.top = 100 + y + "px";

      }
    if(y > 18000){
      icon.src="../images/twentythree.png"


     }







};
