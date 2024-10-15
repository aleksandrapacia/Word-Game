const letters = document.querySelectorAll('letter'); // letters is a list of all letter boxes !!!
console.log(letters);
const loadingDiv = document.querySelector('#loading');
const validWords = ["code", 'game']

const ANSWER_LENGTH = 4;
const ROUNDS = 6;



async function init() {
    // start state
    let currentRow = 0;
    let currentGuess = '';
    let done = false;
    let isLoading = true;

    
    // check if the letter is a valid letter
    function isLetter(letter) {
        return /^[a-zA-Z]$/.test(letter);
    }

    // adding letter
    function addLetter(letter) {
        // if the length of currentGuess is less than 4 append the letter that has just been input
        if (currentGuess.length < ANSWER_LENGTH) {
            currentGuess += letter;
            // if the lenght of currentGuess it equal to 4 then save the guess
            // to current var which will substring so... 
        } else {
            current = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }
        // index -> ex. 1 x 4 + 1 -1 = 2 -> counting on which place you are currebtly
        letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText = letter;
    }

    //TODO: commit() function 

    // display letter in console
    document.addEventListener('keydown', function handleKeyPress (event) {
        const action = event.key;

        console.log(action)
    });

    window.addEventListener('load', function() {
        
        this.setTimeout(function() {
            if (loadingDiv) {
                loadingDiv.style.display = 'none';
            }
        }, 1000) // 1 second
    });

    document.querySelectorAll('.letter').forEach(input => {
        input.addEventListener('input', handleInput);
    });
}

init();

