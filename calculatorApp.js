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
linkElement.href = './styles.css'; 
document.head.appendChild(linkElement); 

let body = document.querySelector('body'); 

let content = document.querySelector('#content'); 
content.style.alignItems = 'anchor-center'; 
content.style.width = '-webkit-fill-available-'; 

let calculator = document.querySelector('.calculator'); 
calculator.style.width = '600px'; 
calculator.style.height = '900px'; 
calculator.style.display = 'flex'; 
calculator.style.flexDirection = 'column'; 
calculator.style.justifyContent = 'center'; 
calculator.style.margin = '2.5em'; 

let screen = document.querySelector('.screen'); 
screen.style.width = '520px'; 
screen.style.height = '150px'; 
screen.style.display = 'flex'; 
screen.style.alignSelf = 'stretch'; 
screen.style.margin = '2em auto'; 
screen.style.border = '2px solid black'; 

let buttons = document.querySelector('.buttons'); 
buttons.style.width = '520px'; 
buttons.style.height = '590px'; 
buttons.style.display = 'grid'; 
buttons.style.alignSelf = 'stretch'; 
buttons.style.flex = '1 1 auto'; 
buttons.style.gridTemplateColumns = 'auto auto auto auto'; 
buttons.style.margin = '0 2.5em 2.5em 2.5em'; 

for (let i=1; i <= 20; i++) {
  let btnDiv = document.createElement('div'); 
  btnDiv.id = `btnDiv${i}`;
  btnDiv.className = "btn"; 
  btnDiv.style.display = 'flex'; 
  btnDiv.style.borderRadius = '10em'; 
  btnDiv.style.margin = '.5em'; 
  
  switch (btnDiv.id) {
    case 'btnDiv1': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
    break; 
    case 'btnDiv2': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      break; 
    case 'btnDiv3': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
    break;
    case 'btnDiv4': 
       btnDiv.style.background = '#20D7FF';
       btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
    break; 
    case 'btnDiv8': 
       btnDiv.style.background = '#20D7FF';
       btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
    break; 
    case 'btnDiv12': 
       btnDiv.style.background = '#20D7FF';
       btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
    break; 
    case 'btnDiv16': 
       btnDiv.style.background = '#20D7FF';
       btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
    break; 
    case 'btnDiv20': 
       btnDiv.style.background = '#20D7FF';
       btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
    break; 

  }


  buttons.appendChild(btnDiv);
}


