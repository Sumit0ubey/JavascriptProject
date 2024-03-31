document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("containerForFactorialCalulation");
    container.classList.add("fadeIn");
});

function CountFunction(sentence){
     let count = 0;
     let isWord = false;
    
     for (let i = 0; i < sentence.length; i++) {
         if (sentence[i] !== ' ' && !isWord) {
                count++;
                isWord = true;
            }
         else if (sentence[i] === ' '){
                isWord = false;
            }
        }
    
        return count;
    }


function WordCount(){
    let sentences = document.getElementById("FetchSentence").value;
    let CountOfWords = CountFunction(sentences);

    document.getElementById("Output").innerHTML = "Number of words in Sentence is " + CountOfWords;
}