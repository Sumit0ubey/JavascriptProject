document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});

function PrintFibonacci() {
    let inputNumber = parseInt(document.getElementById("dataFetchForFibonacciSeries").value);
    let output = document.getElementById("Output");
    output.innerHTML = "";

    if (isNaN(inputNumber) || inputNumber < 1) {
        outputDiv.innerHTML = "Please enter a valid number of terms (greater than 0).";
        return;
    }

    let num1 = 0;
    let num2 = 1;
    let series = num1 + "<br>" + num2;

    for (let i = 0; i < inputNumber - 2; i++) {
        let nextNum = num1 + num2;
        series += "<br>" + nextNum;
        num1 = num2;
        num2 = nextNum;
    }

    output.innerHTML = series;

}
