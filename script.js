const readOut = document.querySelector('#readOut');
const numbers = document.querySelectorAll('#number');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');


let numerator = '';
const numerators = [];
let total = 0;


numbers.forEach(number => {
  number.addEventListener('click', event => {
    numerator += event.target.textContent;
    readOut.textContent = numerator;
  })
})

add.addEventListener('click', () => {
  // Take the current numerator string and parse it as a number

  // Add it straight to the total


})

equals.addEventListener('click', () => {
  readOut.textContent = total;
  numerator = '';
})


  /*
  Concatenate numbers until an operator is pressed
  When an operator is pressed 
  */