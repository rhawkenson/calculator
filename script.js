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
let percentSelected = true;
let decimalSelected = false;
let divideSelected = false;
let multiplySelected = false;
let subtractSelected = false;
let addSelected = false;
let operation;
let num1 = 0;
let num2 = 0;

/* Button onclick events */
one.onclick = function(){
    display.innerHTML += '1';
}
two.onclick = function(){
    display.innerHTML += '2';
}
three.onclick = function(){
    display.innerHTML += '3';
}
four.onclick = function(){
    display.innerHTML += '4';
}
five.onclick = function(){
    display.innerHTML += '5';
}
six.onclick = function(){
    display.innerHTML += '6';
}
seven.onclick = function(){
    display.innerHTML += '7';
}
eight.onclick = function(){
    display.innerHTML += '8';
}
nine.onclick = function(){
    display.innerHTML += '9';
}
zero.onclick = function(){
    display.innerHTML += '0';
}

doubleZero.onclick = function(){
    display.innerHTML += '00';
}

decimal.onclick = function(){
    if (!decimalSelected){
        display.innerHTML += '.';
        decimalSelected = true;
    } else {
        decimalSelected = true;
    }
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

divideButton.onclick = function(){
    if (!divideSelected){
        num1 = parseFloat(display.innerHTML);
        display.innerHTML = '';
        operation = 'divide'; 
        divideSelected = true;
    } else {
        num1 = parseFloat(display.innerHTML);
        operate(); 
    }
    
}
multiplyButton.onclick = function(){
    num1 = parseFloat(display.innerHTML);
    display.innerHTML = '';
    operation = 'multiply';
}
subtractButton.onclick = function(){
    num1 = parseFloat(display.innerHTML);
    display.innerHTML = '';
    operation = 'subtract';
}
addButton.onclick = function(){
    num1 = parseFloat(display.innerHTML);
    display.innerHTML = '';
    operation = 'add';
}



clearButton.onclick = function(){
    display.innerHTML = '';
    decimalSelected = false;
    percentSelected = false;
}

equalsButton.onclick = function(){
    num2 = parseFloat(display.innerHTML);
    operate();
}


/* Basic Button Operation Functions */
function add(){
    display.innerHTML = num1 + num2;
};

function subtract(){
    display.innerHTML =  num1 - num2;
};

function multiply(){
    display.innerHTML =  num1 * num2;
};

function divide(){
    display.innerHTML =  num1 / num2;
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
