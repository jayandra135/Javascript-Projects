
var makechanceNumber;

function winNumber(){
    var min =2;
    var max=12;
    makechanceNumber  = Math.floor(Math.random()*12+1);
    //console.log(makechanceNumber);
    var makechance= document.getElementById("makechance");
    //console.log(makechance);
    if(makechanceNumber >=2 && makechanceNumber <=12){
        makechance.innerHTML = makechanceNumber;
        document.getElementById("winNumber").disabled = true;
        document.getElementById("winNumber").style.backgroundColor = " #dddddd";
        //document.getElementById("winNumber").style.color = " black";
       
    }
    
}

var remainchanceNum = 10;
        
function roll(){
   
    var dice1 = document.getElementById("diceimg1");
    var dice2 = document.getElementById("diceimg2");
    var youwon = document.getElementById("youwon");
    var remainchance = document.getElementById("remainchance");
    
    var e = document.getElementById("makechance").innerText;
    console.log(e);
    
    //e.innerHTML = "&ndash";

    if(isNaN(e)){
        alert("Please click on win number");
    }
    else{
        var a = Math.floor(Math.random()*6+1);
        var b = Math.floor(Math.random()*6+1);
        
        dice1.src ="./images/dice"+ a+ ".png";
        dice2.src ="./images/dice"+ b+".png";
    
        var sum = a + b;
        console.log("sum : "+sum);
       
    
        if(makechanceNumber == sum){
            youwon.innerHTML = " You won";
            document.getElementById("roll").disabled = true;
            document.getElementById("roll").style.backgroundColor = " #dddddd";
            document.getElementById("wongame").style = "background-image:url(./images/cracks1.gif);";
           
        }
        else{
            youwon.innerHTML = " ";
            if(remainchanceNum>0){
                remainchanceNum--;
                remainchance.innerHTML = remainchanceNum;
                console.log(remainchanceNum);
            }
            else{
                document.getElementById("roll").disabled = true;
            }
        }
    
    }
   
}
function reset(){

    document.getElementById("makechance").innerHTML = "&ndash;";
    document.getElementById("remainchance").innerHTML =" &ndash;";
    document.getElementById("roll").disabled = false;
    document.getElementById("roll").style.backgroundColor = " rgb(0, 255, 8)";
    document.getElementById("winNumber").disabled = false;
    document.getElementById("winNumber").style.backgroundColor = " rgb(0, 255, 8)";
    document.getElementById("wongame").style = "";

    remainchanceNum = 10;
    //roll();
    //winNumber();

    var dice1 = document.getElementById("diceimg1");
    var dice2 = document.getElementById("diceimg2");
    dice1.src ="./images/dice1.png";
    dice2.src ="./images/dice1.png";
}