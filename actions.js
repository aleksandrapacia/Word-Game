const letters = document.querySelectorAll('letter');
console.log(letters);
const loadingDiv = document.querySelector('#loading');
const validWords = ["code", 'game']

const ANSWER_LENGTH = 4;
const ROUNDS = 6;

// start state
let currentRow = 0;
let currentGuess = '';
let done = false;
let isLoading = true;

// check if the letter is a valid letter
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
async function init() {

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

function handleInput(event) {
    // check if 
    if (event.type == "keydown") {
        console.log(event.key);
        letters.innerHTML = event.key;
    }
    
}
init();

