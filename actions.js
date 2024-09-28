window.addEventListener('keydown', function (e) {
    document.querySelector('.letter').innerHTML = `You pressed ${e.key}`;
  }, false);

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}