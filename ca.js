window.display = document.getElementById("display");

window.appendValue = function(value){
    if(display.innerText ==='0'){

        display.innerText = value;
}
else{
    display.innerText = display.innerText+value;
}
}

window.clearDisplay = function(value){
    display.innerText = 0;
}
window.calculate = function(){
    try{
        const result =eval(display.innerText) ;
        display.innerText = result;
    }
    catch(error){
        display.innerText = 'Error';
      
        
       
    }
}
