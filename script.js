/* Get elements in the document for onlick to show values in the display */
let display = document.getElementById('input');
let divideButton = document.getElementById('divide');
let signButton = document.getElementById('sign-change');
let percentButton = document.getElementById('percent');
let clearButton = document.getElementById('clear');
let multiplyButton = document.getElementById('multiply');
let subtractButton = document.getElementById('subtract');
let addButton = document.getElementById('add');
let equalsButton = document.getElementById('equals');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let doubleZero = document.getElementById('00');
let decimalButton = document.getElementById('decimal')

let percentSelected = false;
let decimalSelected = false;
let cleared = false;
let operationOn = false;

let operation;
let num1 = 0;
let num2 = 0;

/* Button onclick events */
one.onclick = function(){
    if (cleared){
        display.innerHTML = '1';
    } else{
        display.innerHTML += '1';
    } cleared = false;
    
}
two.onclick = function(){
    if (cleared){
        display.innerHTML = '2'; 
    } else{
        display.innerHTML += '2';
    } cleared = false;
}
three.onclick = function(){
    if (cleared){
        display.innerHTML = '3'; 
    } else{
        display.innerHTML += '3';
    } cleared = false;
}    
four.onclick = function(){
    if (cleared){
        display.innerHTML = '4'; 
    } else{
        display.innerHTML += '4';
    } cleared = false;
}
five.onclick = function(){
    if (cleared){
        display.innerHTML = '5'; 
    } else{
        display.innerHTML += '5';
    } cleared = false;
}
six.onclick = function(){
    if (cleared){
        display.innerHTML = '6'; 
    } else{
        display.innerHTML += '6';
    } cleared = false;
}
seven.onclick = function(){
    if (cleared){
        display.innerHTML = '7'; 
    } else{
        display.innerHTML += '7';
    } cleared = false;
}
eight.onclick = function(){
    if (cleared){
        display.innerHTML = '8'; 
    } else{
        display.innerHTML += '8';
    } cleared = false;
}
nine.onclick = function(){
    if (cleared){
        display.innerHTML = '9'; 
    } else{
        display.innerHTML += '9';
    } cleared = false;
}
zero.onclick = function(){
    if (cleared){
        display.innerHTML = '0'; 
    } else{
        display.innerHTML += '0';
    } cleared = false;
}

doubleZero.onclick = function(){
    if (cleared){
        display.innerHTML = '00'; 
    } else{
        display.innerHTML += '00';
    } cleared = false;
}

decimal.onclick = function(){
    if (!decimalSelected){
        display.innerHTML += '.';
        decimalSelected = true;
    } else {
        decimalSelected = true;
    } cleared = false;
}

signButton.onclick = function(){
    display.innerHTML *= -1;
}

percent.onclick = function(){
    if (!percentSelected){
        display.innerHTML *= 100;
        percentSelected = true;
    } else {
        display.innerHTML /= 100;
        percentSelected = false;
    } 
};

/* Four function calculator - functions */
divideButton.onclick = function(){
        if (!operationOn){
            operation = 'divide';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
            cleared = true;
            operationOn = true;
        } else {
            num2 = parseFloat(display.innerHTML);
            operate();
            operation = 'divide';
    } 
}

multiplyButton.onclick = function(){
    if (!operationOn){
        operation = 'multiply';
        num1 = parseFloat(display.innerHTML);
        display.innerHTML = '';
        cleared = true;
        operationOn = true;
    } else {
        num2 = parseFloat(display.innerHTML);
        operate();
        operation = 'multiply';
    }
}

subtractButton.onclick = function(){
    if (!operationOn){
        operation = 'subtract';
        num1 = parseFloat(display.innerHTML);
        display.innerHTML = '';
        cleared = true;
        operationOn = true;
    } else {
        num2 = parseFloat(display.innerHTML);
        operate();
        operation = 'subtract';
    } 
}

addButton.onclick = function(){
    if (!operationOn){
        operation = 'add';
        num1 = parseFloat(display.innerHTML);
        display.innerHTML = '';
        cleared = true;
        operationOn = true;
    } else {
        num2 = parseFloat(display.innerHTML);
        operate();
        operation = 'add';
    } 
}   


/* Clear all settings */
clearButton.onclick = function(){
    display.innerHTML = '';
    clearAll();
}

function clearAll(){
    decimalSelected = false;
    percentSelected = false;
    divideSelected = false;
    multiplySelected = false;
    subtractSelected = false;
    addSelected = false;
    num1 = 0;
    num2 = 0;
    cleared = true;
}

equalsButton.onclick = function(){
    num2 = parseFloat(display.innerHTML);
    operate();
}


/* Basic Button Operation Functions */
function add(){
    display.innerHTML = num1 + num2;
    cleared = true;
    num1 = parseFloat(display.innerHTML);
};

function subtract(){
    display.innerHTML =  num1 - num2;
    cleared = true;
    num1 = parseFloat(display.innerHTML);
};

function multiply(){
    display.innerHTML =  num1 * num2;
    cleared = true;
    num1 = parseFloat(display.innerHTML);
};

function divide(){
    if (num2 === 0){
        display.innerHTML =  'ERROR!';
        clearAll();
    } else {
       display.innerHTML =  num1 / num2; 
       cleared = true;
       num1 = parseFloat(display.innerHTML);
    }
};

function operate(){
    if (operation === 'add'){
        return add();
    } else if (operation === 'subtract'){
        return subtract();
    } else if (operation === 'multiply'){
        return multiply();
    } else if (operation === 'divide'){
       return divide();
    }
};
