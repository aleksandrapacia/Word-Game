window.addEventListener('keydown', function (e) {
    document.querySelector('.letter').innerHTML = `You pressed ${e.key}`;
  }, false);

