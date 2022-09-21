const dynamicContent = document.getElementById("dynamic-text");

const phrases = ["Student...", "Learner...", "Programmer..."]
let phraseIndex = 0;
let letterIndex = 0;
let typingSpeed = 200;
let erasingSpeed = 100;

function printLetters(phrase){
    if (letterIndex == phrase.length){
        clearLetters();
    }
    else if (letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrase);
        }, typingSpeed)
    }
}

function clearLetters() {
    if (letterIndex == -1){
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    }
    else if (letterIndex > -1) {
        let updatePhrase = "";
        for (let index = 0; index < letterIndex; index++){
            updatePhrase += phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent = updatePhrase;
        letterIndex -= 1;
        setTimeout(clearLetters,erasingSpeed)
    }
}

printLetters(phrases[phraseIndex]);