
function add(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");

    try {
        if (!/^[0-9+\-*/().\s]+$/.test(display.value)) {
            throw new Error("Invalid input");
        }

        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}
