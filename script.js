const buttons = document.querySelector('.buttons');

const buttonSymbols = ['C', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

buttonSymbols.forEach(buttonSymbol => {
  const button = document.createElement('button');
  button.textContent = buttonSymbol;
  button.setAttribute('id', 'button');
  buttons.appendChild(button);
})