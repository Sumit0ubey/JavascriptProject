document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});


function printPrimeNumber(){
    let Prime_Number = []

    for(let i = 2; i <= 100; i++){
        let isPrime = true;
        for(let y = 2; y < i; y++){
            if(i % y === 0){
                isPrime = false;
                break
            }
        }
        if(isPrime){
        Prime_Number.push(i);
        }
    }
document.getElementById("Output").innerHTML = "Prime Numbers: " + Prime_Number.join(",");
}