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

console.log(operate("-", 2, 3)); 
console.log(operate("*", 2, 3));
console.log(operate("+", 2, 3)); 
console.log(operate("/", 2, 3)); 
