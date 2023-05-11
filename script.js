const readOut = document.querySelector('#readOut');
const numbers = document.querySelectorAll('#number');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');


let numerator = '';
const operations = [];
let total;

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

equals.addEventListener('click', () => {
  operations.push(parseInt(numerator));
  numerator = '';
  total = runOperations();
  readOut.textContent = total;
});

function runOperations(){
 const sum = operations.reduce((accumulator, currentValue, currentIndex, array) => {
  const nextValue = parseInt(array[currentIndex + 1]);
    if (currentValue === '+') {
      accumulator += nextValue;
    } else if (currentValue === '-') {
      accumulator -= nextValue;
    } else if (currentValue === '÷') {
      accumulator /= nextValue;
    };
    return accumulator;
  });  
  return sum;
} 

  /*
  Concatenate numbers until an operator is pressed
  When an operator is pressed 
  */