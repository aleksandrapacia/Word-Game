window.addEventListener('keydown', function (e) {
    document.querySelector('.letter').innerHTML = `You pressed ${e.key}`;
  }, false);

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

// show the loading spinner when needed
function setLoading(isLoading) {
    loadingDiv.classList.toggle("hidden", !isLoading);
  }

function makeMap(array) {
    const obj = {};
    for (let i = 0; i<array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++;
        } else {
            obj[array[i]] = 1;
        }
        return obj;
    }
}