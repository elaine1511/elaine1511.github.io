function clickToAdd() {
    const input = document.getElementById("input").value;
    document.getElementById("output").value = input;
    document.getElementById("input").value = "";
}

function sum() {
    const firstValue = parseInt(document.getElementById("first").value);
    const secondValue = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = firstValue + secondValue;
}
function subtract() {
    const firstValue = parseInt(document.getElementById("first").value);
    const secondValue = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = firstValue - secondValue;
}
function multiply() {
    const firstValue = parseInt(document.getElementById("first").value);
    const secondValue = parseInt(document.getElementById("second").value);
    document.getElementById("result").innerHTML = firstValue * secondValue;
}

