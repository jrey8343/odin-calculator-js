const readOut = document.querySelector('#readOut');
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const percentage = document.querySelector('#percentage');
const invert = document.querySelector('#invert');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

// Memory
let numerator = '';
let operations = [];
let total;

//Click Events 

numbers.forEach(number => {
  number.addEventListener('click', event => {
    numerator += event.target.textContent;
    readOut.textContent = numerator;
  })
})

operators.forEach(operator => {
  operator.addEventListener('click', event => {
    operations.push(parseFloat(numerator), event.target.textContent);
    numerator = '';
  })
})

percentage.addEventListener('click', () => {
  const percentConversion = parseFloat(numerator) / 100;
  operations.push(percentConversion);
  readOut.textContent = percentConversion;
  numerator = '';
});

invert.addEventListener('click', () => {
  const inverted = parseFloat(numerator) * -1;
  operations.push(inverted);
  readOut.textContent = inverted;
  numerator = '';
});

clear.addEventListener('click', () => {
  operations = [];
  numerator = '';
  total = null;
  readOut.textContent = 'Make a calculation...';
});

equals.addEventListener('click', () => {
  operations.push(parseFloat(numerator));
  numerator = '';
  total = runOperations();
  readOut.textContent = total;
});

//Keyboard Events

window.document.addEventListener('keydown', event => {
  if (event.key === '1' ||
      event.key === '2' ||
      event.key === '3' ||
      event.key === '4' ||
      event.key === '5' ||
      event.key === '6' ||
      event.key === '7' ||
      event.key === '8' ||
      event.key === '9' ||
      event.key === '.') {
        numerator += event.key;
        readOut.textContent = numerator;
      } else if (
      event.key === '+' ||
      event.key === '-' ||
      event.key === '÷' ||
      event.key === 'x') {
        operations.push(parseFloat(numerator), event.key);
        numerator = '';
      } else if (event.key === '=') {
        operations.push(parseFloat(numerator));
        numerator = '';
        total = runOperations();
        readOut.textContent = total;
      } else if (event.key === '%') {
        const percentConversion = parseFloat(numerator) / 100;
        operations.push(percentConversion);
        readOut.textContent = percentConversion;
        numerator = '';
      } else if (event.key === 'Escape' || event.key === 'Backspace') {
        operations = [];
        numerator = '';
        total = null;
        readOut.textContent = 'Make a calculation...';
      };
})

// Operational Logic

function runOperations(){
 const sum = operations.reduce((accumulator, currentValue, currentIndex, array) => {
  const nextValue = parseFloat(array[currentIndex + 1]);
    if (currentValue === '+') {
      accumulator += nextValue;
    } else if (currentValue === '-') {
      accumulator -= nextValue;
    } else if (currentValue === '÷') {
      accumulator /= nextValue;
    } else if (currentValue === 'x') {
      accumulator *= nextValue;
    };
    return accumulator;
  });  
  return sum;
} 
