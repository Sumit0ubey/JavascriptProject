document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});

function calculateFactorial() {
    let inputNumber = Number(document.getElementById("dataFetchForFactorialCalculation").value);
    if(inputNumber == ""){
        document.getElementById("Output").innerHTML = "Please enter a number.";
    }
    else{
        if (isNaN(inputNumber)) {
            document.getElementById("Output").innerHTML = "Please enter a valid number.";
        } else {
            let result = 1;

            if (inputNumber < 0) {
                document.getElementById("Output").innerHTML = "You have provided a negative number.<br> Please re-enter.";
            } else {
                for (let i = 2; i <= inputNumber; i++) {
                    result *= i;
                }
                document.getElementById("Output").innerHTML = "Factorial of " + inputNumber + " is " + result;
            }
        }
    }
}
