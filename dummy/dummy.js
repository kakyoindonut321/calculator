const buttons = document.querySelectorAll(".button");
var display = document.querySelector(".display").innerText;

const calculator = {
    operator: true
}


for (let button of buttons) {
    button.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains('calculate')) {
            if (!calculator.operator) {
                alert("operator jangan terakhir");
                return;
            }
            operation(display);
            display = document.querySelector(".display").innerText;
            return;
        }
        if (target.classList.contains('operator')) {
            doubleCheck(target.innerText);
            display = document.querySelector(".display").innerText;
            return;
        }
        if (target.classList.contains('clear')) {
            calculator.operator = true;
            display = 0;
            update(0);
            return;
        }
        if (target.classList.contains('num')) {
            calculator.operator = true;
        }
        append(target.innerText);
        display = document.querySelector(".display").innerText;
        console.log("check return");
    });

}

function doubleCheck(targetCheck) {
    if (!calculator.operator) {} else {
        calculator.operator = false;
        append(targetCheck);
    }
}

function update(targetUpdate) {
    document.querySelector(".display").innerText = targetUpdate;
}

function operation(targetOperation) {
    let result = Function("return " + targetOperation)();
    update(result);
}

function append(targetAppend) {
    if (display == 0) {
        update(targetAppend);
    } else {
        update(display + targetAppend);
    }
}
