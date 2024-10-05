const letters = document.querySelectorAll('letter');
console.log(letters);
const loadingDiv = document.querySelector('#loading');


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
}


init();

//TODO: loading emoji only when the page is loading