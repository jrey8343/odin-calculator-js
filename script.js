const readOut = document.querySelector('#readOut');
const numbers = document.querySelectorAll('#number');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const percentage = document.querySelector('#percentage');
const invert = document.querySelector('#invert');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

// Memory
let numerator = '';
let operations = [];
let total;

//Events 

numbers.forEach(number => {
  number.addEventListener('click', event => {
    numerator += event.target.textContent;
    readOut.textContent = numerator;
  })
})

add.addEventListener('click', event => {
  operations.push(parseInt(numerator), event.target.textContent);
  numerator = '';
});

subtract.addEventListener('click', event => {
  operations.push(parseInt(numerator), event.target.textContent);
  numerator = '';
});

divide.addEventListener('click', event => {
  operations.push(parseInt(numerator), event.target.textContent);
  numerator = '';
});

multiply.addEventListener('click', event => {
  operations.push(parseInt(numerator), event.target.textContent);
  numerator = '';
});

percentage.addEventListener('click', () => {
  const percentConversion = parseInt(numerator) / 100;
  operations.push(percentConversion);
  readOut.textContent = percentConversion;
  numerator = '';
});

invert.addEventListener('click', () => {
  const inverted = parseInt(numerator) * -1;
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
  operations.push(parseInt(numerator));
  numerator = '';
  total = runOperations();
  readOut.textContent = total;
});

//Logic 

function runOperations(){
 const sum = operations.reduce((accumulator, currentValue, currentIndex, array) => {
  const nextValue = parseInt(array[currentIndex + 1]);
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
