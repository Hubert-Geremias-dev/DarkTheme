const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

buttons.forEach(button => {
  if (button.dataset.value) {
    button.addEventListener('click', () => {
      display.value += button.dataset.value;
    });
  }
});

clearButton.addEventListener('click', () => {
  display.value = '';
});

equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
    addToHistory(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
});
