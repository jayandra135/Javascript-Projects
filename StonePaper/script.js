 function dropdownlist(x){
    //console.log(a);
    x = document.getElementById("myselect").value;
   //document.getElementById("player1").innerHTML = x;

   var imgchange = document.getElementById("playerimg");
   
   if(x=="Scissor"){

    imgchange.style.backgroundImage = "url(./images/img1.png)";
    imgchange.style.width = "200px";
    imgchange.style.height = "150px";
    imgchange.style.backgroundRepeat ="no-repeat";
    imgchange.style.backgroundSize ="contain";
    imgchange.style.marginLeft ="25%";
   }
   else if(x=="Paper"){
    imgchange.style.backgroundImage = "url(./images/img0.png)";
    imgchange.style.width = "200px";
    imgchange.style.height = "150px";
    imgchange.style.backgroundRepeat ="no-repeat";
    imgchange.style.backgroundSize ="contain";
    imgchange.style.marginLeft ="25%";
   }
   else{
    imgchange.style.backgroundImage = "url(./images/img2.png)";

    imgchange.style.width = "200px";
    imgchange.style.height = "150px";
    imgchange.style.backgroundRepeat ="no-repeat";
    imgchange.style.backgroundSize ="contain";
    imgchange.style.marginLeft ="25%";
   }
   

   return x;

}

function play(){

    var arrOption = ['Paper','Scissor','Rock'];
    //console.log(arrOption);

    var a =Math.floor(Math.random()*3);
    console.log("a "+a);
    var computer1= arrOption[a];
    //console.log("from array "+computer1);
    //document.getElementById("computer1").innerHTML =computer1;

    var imgchange2 = document.getElementById("computerimg");
   
    imgchange2.style = "background-image:url(images/img" +a+".png)";  
    imgchange2.style.width = "200px";
    imgchange2.style.height = "150px";
    imgchange2.style.backgroundRepeat ="no-repeat";
    imgchange2.style.backgroundSize ="contain";
    imgchange2.style.marginLeft ="25%";

    var x;
    var player1 = dropdownlist(x);
    //console.log(player1);
    var imgchange = document.getElementById("computerimg.png");

    if(player1=="Scissor" && computer1=="Scissor" || player1=="Paper" && computer1=="Paper" || player1=="Rock" && computer1=="Rock")
    {
        document.getElementById("result").innerHTML = "😟Match Draw😟";
    }
    else if(player1 =="Rock" && computer1 == "Scissor")
    {
        document.getElementById("result").innerHTML = "😊Player Won😊";
    }
    else if(player1 =="Scissor" && computer1 == "Paper"){
        document.getElementById("result").innerHTML = "😊Player Won😊";
    }
    else if(player1 == "Paper" && computer1 =="Rock"){
        document.getElementById("result").innerHTML = "😊Player Won😊";
    }
   
    else{
        document.getElementById("result").innerHTML = "💻Computer Won💻";
    }
    
    
}