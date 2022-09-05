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

const buttons = document.querySelectorAll(".button");
// console.log(buttons)
for (let button of buttons) {

    button.addEventListener("click", function(event) {

        const target = event.target;
        console.log(target.innerText)

    })

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