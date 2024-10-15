const validWords = ["word", "game", "test", "code"];  // You can define valid words
const totalRows = 6;
const totalColumns = 4;

let currentRow = 0;

function createGrid() {
  const boxContainer = document.getElementById('box-container');
  
  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalColumns; j++) {
      const input = document.createElement('input');
      input.setAttribute('maxlength', '1');
      input.setAttribute('data-row', i);
      input.setAttribute('data-col', j);
      input.addEventListener('input', handleInput);
      input.disabled = i !== currentRow;
      boxContainer.appendChild(input);
    }
  }
}

function handleInput(event) {
  const inputElement = event.target;
  const currentCol = parseInt(inputElement.getAttribute('data-col'));
  const currentRow = parseInt(inputElement.getAttribute('data-row'));

  // Move to the next input box if the current one is filled
  if (inputElement.value.length === 1 && currentCol < totalColumns - 1) {
    const nextInput = document.querySelector(`input[data-row="${currentRow}"][data-col="${currentCol + 1}"]`);
    if (nextInput) {
      nextInput.focus();
    }
  }

  // Check if the row is fully filled
  const currentRowInputs = Array.from(document.querySelectorAll(`input[data-row="${currentRow}"]`));
  const currentWord = currentRowInputs.map(input => input.value).join('');

  if (currentWord.length === totalColumns) {
    if (validWords.includes(currentWord)) {
      moveToNextRow();
    } else {
      alert('Invalid word. Try again.');
    }
  }
}

function moveToNextRow() {
  const previousRowInputs = document.querySelectorAll(`input[data-row="${currentRow}"]`);
  previousRowInputs.forEach(input => input.disabled = true);
  
  currentRow += 1;
  
  if (currentRow < totalRows) {
    const newRowInputs = document.querySelectorAll(`input[data-row="${currentRow}"]`);
    newRowInputs.forEach(input => input.disabled = false);
    newRowInputs[0].focus();  // Focus on the first input of the new row
  } else {
    alert('Game over! You finished all rows.');
  }
}

document.addEventListener('DOMContentLoaded', createGrid);
