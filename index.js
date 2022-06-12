const screen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const updateScreen = (number)=> {
    screen.value = number;
}

buttons.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
        updateScreen(e.target.value);
    });
});

const inputNumber = (number)=> {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
} 

numbers.forEach((number)=> {
    number.addEventListener("click", (e)=> {
        inputNumber(e.target.value);
        updateScreen(currentNumber);
    });
});

numbers.forEach((number)=>{
    number.addEventListener("click", (e)=>{
        console.log(e.target.value);
    });
});

// Calculation Operator Buttons
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        console.log(e.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }

    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
});

// Equal Sign Button
const calculate = ()=> {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber);
            break;
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber);
            break;
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener("click", ()=>{
    calculate();
    updateScreen(currentNumber);
});

// All Clear Button
const clearAll = ()=> {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '';
}

clearBtn.addEventListener("click", ()=>{
    clearAll();
    updateScreen(currentNumber);
});

// Decimal
inputDecimal = (dot)=> {
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener("click", (e)=> {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});