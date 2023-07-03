function calc(a){
  console.log(a);
    var result = document.querySelector("#result");

    var btns = a.innerHTML;
   
    if(btns=="="){
        result.innerHTML = eval(result.innerHTML);
    }
    else if(btns == "x"){
        result.innerHTML += "*";
    }
    else if(btns == "AC"){
        result.innerHTML = "";
    }
   else if(btns == "backspace"){
    result.innerHTML = result.innerHTML.slice(0,-1);
   }
    else{
        result.innerHTML += btns;
    }
    
}