const letters = document.querySelectorAll('letter');
console.log(letters);
const loadingDiv = document.querySelector('loading');

async function init() {

    document.addEventListener('keydown', function handleKeyPress (event) {
        const action = event.key;

        console.log(action)
    });
}
init();