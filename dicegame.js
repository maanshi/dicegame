
// first image
var randomnumber=Math.floor((Math.random()*6)+1);
var randomimage="dice" + randomnumber + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);
// second image changing
var randomnumber1=Math.floor((Math.random()*6)+1);
var randomimage1="dice" + randomnumber1 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage1);
 if(randomnumber>randomnumber1)
 {
   document.querySelector("h1").innerHTML=" 🏆Player1 win🏆";
 }
 else if(randomnumber===randomnumber1)
 {
   document.querySelector("h1").innerHTML="🙂Game ties here🙂";
 }
 else{
   document.querySelector("h1").innerHTML="🏆Player2 win🏆";
 }
