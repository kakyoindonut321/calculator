var i = 0;

function newOP(op) {
    document.querySelector("#opDisplay").innerText = op;
}
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function loopin() {
    while (i < 10) {
        clearCalculator();
        updateDisplay();
        i++;
    }
}
/*  kode main-main
    async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testloop() {
    let i = 0;
    do {
        await sleep(100).then(() => {
            performCalculation();
            updateDisplay();
        });
        i++;
    } while (i < 100);
}
 **/


const buttons = document.querySelectorAll(".button");
// console.log(buttons)
for (let button of buttons) {

    button.addEventListener("click", function(event) {

        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            newOP("?")
            return;
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            newOP(target.innerText);
            return;
        }

        if (target.classList.contains('equals')) {
            //testloop()
            performCalculation();
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    })

}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    } else if (calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
    } else if (calculator.operator === "x") {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

/*
for (let button of buttons) {

    button.addEventListener("click", function(event) {
        const target = event.target;
        document.getElementById("displayNumber").innerHTML = target.innerText;
        //let change = document.getElementById("displayNumber").innerText;
        //document.getElementById("displayNumber").innerHTML = target.innerText + change;
    });
}

class Kalkulator {
    constructor() {

    }
}
**/