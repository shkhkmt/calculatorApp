"use strict"; 

// calculator functions 

function sum(a, b) { 
  return a + b; 
}

function subtract(a, b) { 
  return a - b; 
} 

function multiply(a, b) { 
  return a * b; 
} 

function divide(a, b) {
  return a / b; 
}

// operator function 

function operate(operator, a, b) { 
  switch (operator) { 
    case "+": 
      return sum(a, b);
      break; 
    case "-": 
      return subtract(a, b); 
      break; 
    case "*": 
      return multiply(a, b); 
      break; 
    case "/": 
      return divide(a, b) 
      break; 
  }
}

/*
console.log(operate("-", 2, 3)); 
console.log(operate("*", 2, 3));
console.log(operate("+", 2, 3)); 
console.log(operate("/", 2, 3)); 
*/ 

// UI 

const linkElement = document.createElement('link'); 
linkElement.rel = 'stylesheet'; 
linkElement.href = 'styles.css'; 
document.head.appendChild(linkElement); 

let body = document.querySelector('body'); 

let content = document.querySelector('#content'); 
content.style.alignItems = 'anchor-center'; 
content.style.width = '-webkit-fill-available-'; 

let calculator = document.querySelector('.calculator'); 
calculator.style.width = '600px'; 
calculator.style.height = '900px'; 
calculator.style.border = '2px solid black'; 
calculator.style.display = 'flex'; 
calculator.style.flexDirection = 'column'; 
calculator.style.justifyContent = 'center'; 

let screen = document.querySelector('#screen'); 
screen.style.width = '520px'; 
screen.style.height = '150px'; 
screen.style.display = 'flex'; 
screen.style.alignSelf = 'stretch'; 
screen.style.margin = '2em auto'; 
screen.style.border = '2px solid black'; 

let buttons = document.querySelector('#buttons'); 
buttons.style.width = '520px'; 
buttons.style.height = '590px'; 
buttons.style.display = 'flex'; 
buttons.style.alignSelf = 'stretch'; 
buttons.style.margin = '2em auto'; 
buttons.style.border = '2px solid black'; 
