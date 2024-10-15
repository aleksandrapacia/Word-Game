const letters = document.querySelectorAll('letter');
console.log(letters);
const loadingDiv = document.querySelector('#loading');
const validWords = ["code", 'game']

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
    if (event.type == "keydown") {
        console.log(event.key);
    }
    
}
init();

