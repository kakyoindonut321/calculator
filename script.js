const buttons = document.querySelectorAll(".button");

for (let button of buttons) {

    button.addEventListener("click", function(event) {
        const target = event.target;
        let change = document.getElementById("displayNumber").innerText;
        document.getElementById("displayNumber").innerHTML = target.innerText + change;
    });
}