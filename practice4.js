document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});

function PrintSum(){
    Number1 = document.getElementById("dataFetchForSum").value;
    length = Number1.length;

    let new_number = [];
    for(let i = 0; i <= length - 1; i++){
        new_number.push(Number(Number1[i]));
    }

    let sum = 0;
    for(let y = 0; y <= length - 1; y++){
        sum += new_number[y];
    }

    document.getElementById("Output").innerHTML = "Sum of the Digits: " + sum;
}