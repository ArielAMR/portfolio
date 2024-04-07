const display = document.getElementById('display')

function appendToDisplay(input){
    if(display.value === 'error'){
        display.value = input;
    }else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'error'
    }
}
function deleteNumber(){
    display.value = display.value.toString().slice(0, -1)
}

window.addEventListener('keyup', (keyPressed)=>{
    if (keyPressed.keyCode == 8 || keyPressed.keyCode == 68) {
        deleteNumber();
    }else if(keyPressed.keyCode == 67){
        clearDisplay();
    }else if(keyPressed.keyCode == 187 || keyPressed.keyCode == 13){
        calculate();
    }else if(keyPressed.keyCode == 69){
        appendToDisplay('e');
    }else if(keyPressed.keyCode == 187 || keyPressed.keyCode == 107){
        appendToDisplay('+');
    }else if(keyPressed.keyCode == 109){
        appendToDisplay('-');
    }else if(keyPressed.keyCode == 106 || keyPressed.keyCode == 220){
        appendToDisplay('*');
    }else if(keyPressed.keyCode == 111 || keyPressed.keyCode == 191){
        appendToDisplay('/');
    }else if(keyPressed.keyCode == 110 || keyPressed.keyCode == 190){
        appendToDisplay('.');
    }else if(keyPressed.keyCode == 97 || keyPressed.keyCode == 49){
        appendToDisplay('1');
    }else if(keyPressed.keyCode ==  98 || keyPressed.keyCode == 50){
        appendToDisplay('2');
    }else if(keyPressed.keyCode ==  99|| keyPressed.keyCode == 51){
        appendToDisplay('3');
    }else if(keyPressed.keyCode ==  100|| keyPressed.keyCode == 52){
        appendToDisplay('4');
    }else if(keyPressed.keyCode ==  101|| keyPressed.keyCode == 53){
        appendToDisplay('5');
    }else if(keyPressed.keyCode ==  102|| keyPressed.keyCode == 54){
        appendToDisplay('6');
    }else if(keyPressed.keyCode ==  103|| keyPressed.keyCode == 55){
        appendToDisplay('7');
    }else if(keyPressed.keyCode ==  104|| keyPressed.keyCode == 56){
        appendToDisplay('8');
    }else if(keyPressed.keyCode ==  105|| keyPressed.keyCode == 57){
        appendToDisplay('9');
    }else if(keyPressed.keyCode == 96 || keyPressed.keyCode == 48){
        appendToDisplay('0');e
    }
})