document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});


let displayValue = '';

function appendToDisplay(value) {
    if ("+-*/".includes(displayValue.slice(-1)) && "+-*/".includes(value)) {
        displayValue = displayValue.slice(0, -1) + value;
    } else {
        displayValue += value;
    }
    
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

