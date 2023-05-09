let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll('.numbers');
    let operators = document.querySelectorAll('.operators'); 
    let clear = document.querySelector('#clear');
    let del = document.querySelector('#del');
    let equals = document.querySelector('#equals');
    let currentDisplay = document.querySelector('.currentOperand');
    let previousDisplay = document.querySelector('.previousOperand');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        currentDisplay.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousValue = currentValue
        previousDisplay.textContent = previousValue + '' + operator;
        currentValue = ''
        currentDisplay.textContent = currentValue;
    }))

    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousDisplay.textContent = previousValue;
        currentDisplay.textContent = currentValue;
    })

    del.addEventListener('click', function(){
        currentValue = currentValue.slice(0,-1)
        currentDisplay.textContent = currentValue;
    })

    equals.addEventListener('click', function(){
        operate();
        previousDisplay.textContent = '';
        currentDisplay.textContent = currentValue;
    })
})

function handleNumber(num) {
    currentValue += num;
}

function handleOperator(op) {
    operator = op;
}


function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else if (operator === '/') {
        previousValue /= currentValue;
    }; 
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}; // answer is calculated and returned
// change display to operate answer









