const letters = document.querySelectorAll('letter');
console.log(letters);
const loadingDiv = document.querySelector('#loading');
const letter = document.getElementById('letter-0');

async function init() {

    document.addEventListener('keydown', function handleKeyPress (event) {
        const action = event.key;

        console.log(action)
    });
    // event listener for the letter
    letter.addEventListener('keydown', (e) => {
        if (e.key === '[A-Za-z]$') {
            console.log('Enter pressed')
            innerHTML = e.key;

        }
    });



    window.addEventListener('load', function() {
        
        this.setTimeout(function() {
            if (loadingDiv) {
                loadingDiv.style.display = 'none';
            }
        }, 1000) // 1 second
    });
}


init();

//TODO: loading emoji only when the page is loading