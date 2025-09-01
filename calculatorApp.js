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

function sqrt(a) { 
  return Math.sqrt(a); 
} 

function pcnt(a, b) { 
  return a * b/100;
} 

// operator function 

function operate(values) { 
  
  let a = getA(values);  
  let b = getB(values); 
  let operator = getOperator(values);
  
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
    case "÷": 
      if (b === 0) { 
        return "Don't be silly"; 
      }
      else {
      return divide(a, b);  
      }
      break;
    case "√": 
      return sqrt(b); 
    case "%": 
      return pcnt(a, b); 
  }
}


const linkElement = document.createElement('link'); 
linkElement.rel = 'stylesheet'; 
linkElement.href = './styles.css'; 
document.head.appendChild(linkElement); 

let body = document.querySelector('body'); 

let content = document.querySelector('#content'); 
content.style.alignItems = 'anchor-center'; 
content.style.width = '-webkit-fill-available-'; 
content.style.flexDirection = 'column'; 

let calculator = document.querySelector('.calculator'); 
calculator.style.display = 'flex'; 
calculator.style.flexDirection = 'column'; 
calculator.style.justifyContent = 'center'; 
calculator.style.margin = '2rem auto'; 


let screen = document.querySelector('.screen'); 
screen.style.height = '4rem'; 
screen.style.display = 'flex'; 
screen.style.alignSelf = 'stretch'; 
screen.style.alignItems = 'end'; 
screen.style.justifyContent = 'flex-end'; 
screen.style.margin = '.5rem'; 
screen.style.border = '2px solid black'; 

let inputs = document.createElement('p'); 
inputs.textContent = ''; 
inputs.style.fontSize = '4rem'; 
inputs.style.display = 'flex'; 
inputs.style.width = 'auto';

let inputValues = inputs.textContent
let values = Array.from(inputValues);

screen.appendChild(inputs) 


let buttons = document.querySelector('.buttons'); 
buttons.style.display = 'grid'; 
buttons.style.alignSelf = 'stretch'; 
buttons.style.flex = '1 1 auto'; 
buttons.style.gridTemplateColumns = 'auto auto auto auto'; 
buttons.style.margin = 'auto';

let footer = document.createElement('footer'); 
footer.id = 'footer'; 
footer.textContent = '© 2025 shkhkmt'; 
footer.style.position = 'fixed' 
footer.style.bottom = '0'; 
footer.style.width = '100%'; 
content.appendChild(footer); 

for (let i=1; i <= 20; i++) {
  let btnDiv = document.createElement('div'); 
  btnDiv.id = `btnDiv${i}`;
  btnDiv.className = "btn"; 
  btnDiv.style.display = 'flex'; 
  btnDiv.style.borderRadius = '.5rem'; 
  btnDiv.style.margin = '.5rem'; 
  btnDiv.style.justifyContent = 'center'; 
  btnDiv.style.fontSize = '1.5rem'; 
  
  switch (btnDiv.id) {
    case 'btnDiv1': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      btnDiv.textContent = 'AC'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv2': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      btnDiv.textContent = '√x'; 
      btnDiv.style.display = 'flex';
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.justifyContent = 'center';; 
      break; 
    case 'btnDiv3': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      btnDiv.textContent = '%'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
    break;
    case 'btnDiv4': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      btnDiv.textContent = '÷'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
    break; 
    case 'btnDiv8': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      btnDiv.textContent = '×'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
    break; 
    case 'btnDiv12': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)';
      btnDiv.textContent = '−';  
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
    break; 
    case 'btnDiv16': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      btnDiv.textContent = '+'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center';
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv20': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      btnDiv.textContent = '=';
      btnDiv.style.alignItems = 'center' 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
    break; 
    case 'btnDiv5': 
      btnDiv.textContent = '7'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break;
    case 'btnDiv6': 
      btnDiv.textContent = '8'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv7': 
      btnDiv.textContent = '9'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv9': 
      btnDiv.textContent = '4'; 
      btnDiv.style.disply = 'flex'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv10': 
      btnDiv.textContent = '5'; 
      btnDiv.style.alignItems = 'center';
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv11': 
      btnDiv.textContent = '6'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv13': 
      btnDiv.textContent = '1'; 
      btnDiv.style.alignItems = 'center';
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv14': 
      btnDiv.textContent = '2'; 
      btnDiv.style.alignItems = 'center' 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv15': 
      btnDiv.textContent = '3'; 
      btnDiv.style.alignItems = 'center';  
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
     case 'btnDiv18': 
      btnDiv.textContent = '0'; 
      btnDiv.style.alignItems = 'center';  
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv19': 
      btnDiv.textContent = '.'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
    case 'btnDiv17': 
      btnDiv.textContent = '⬅︎'; 
      btnDiv.style.alignItems = 'center'; 
      btnDiv.style.display = 'flex'; 
      btnDiv.style.justifyContent = 'center'; 
      btnDiv.style.alignItems = 'center'; 
    break; 
  }

  buttons.appendChild(btnDiv);

}


function handleClick (event) { 

  let target = event.target; 
    switch (target.id) {
      case 'btnDiv1': 
        values.length = 0; 
        inputs.textContent = values.join('');  
        break; 
      case 'btnDiv2': 
        if (values.length === 0) {
          values.push('√');
          inputs.textContent  = values.join('');
          } 
        else {
          break;
        }
        break; 
      case 'btnDiv3': 
        if (values.length === 0 || typeof getB(values) !== 'number' || typeof operate(values) !== 'number'  || values[values.last()] === '.')  {
          break; 
        } 
        else if (typeof operate(values) === 'number' && getOperator(values) === '*') {
          let a = getA(values); 
          let b = getB(values); 
          inputs.textContent = pcnt(a, b); 
          values.length = 0; 
        }
        else { 
          break;
        }
        break; 
      case 'btnDiv4': 
          if (values.length === 0 || values[values.last()] === '÷' || values[values.last()] === '.') { 
            break; 
          }
          else if (typeof getOperator(values) === 'string') {
            values.pop(); 
            values.push ('÷');
            inputs.textContent = values.join(''); 
          }
          else if (getOperator(values) === undefined){
          values.push('÷');
          inputs.textContent = values.join('');  
          } 
          else {
            inputs.textContent = operate(values).toFixed(3); 
            values.length = 0; 
          }
        break; 
      case 'btnDiv5': 
        values.push(7); 
        inputs.textContent = values.join('');  
        break; 
      case 'btnDiv6':
        values.push(8)
        inputs.textContent = values.join('');  
        break; 
      case 'btnDiv7': 
        values.push(9) 
        inputs.textContent = values.join('');  
        break; 
      case 'btnDiv8': 
        if (values.length === 0 || values[values.last()] === '*' || values[values.last()] === '.')  { 
          break; 
        } 
        else if (typeof getOperator(values) === 'string') { 
          values.pop(); 
          values.push('*');
          inputs.textContent = values.join(''); 
        } 
        else if (getOperator(values) === undefined) {
          values.push('*');
          inputs.textContent = values.join(''); 
        }
        else {
          inputs.textContent = operate(values).toFixed(3); 
          values.length = 0; 
        }
        break; 
      case 'btnDiv9': 
        values.push(4); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv10': 
        values.push(5); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv11': 
        values.push(6); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv12':
          if (values.length === 0 || values[values.last()] === '-' || values[values.last()] === '.')  { 
            break; 
          }
        else if (typeof getOperator(values) === 'string') {
          values.pop(); 
          values.push('-'); 
          inputs.textContent = values.join(''); 
        }
        else if (getOperator(values) === undefined) {
            values.push('-'); 
            inputs.textContent = values.join(''); 
        }
        else {
            inputs.textContent = operate(values); 
            values.length = 0; 
        } 
        break; 
      case 'btnDiv13': 
        values.push(1); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv14': 
        values.push(2); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv15': 
        values.push(3); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv16': 
        if (values.length === 0 || values[values.last()] === '+' || values[values.last()] === '.') {
            break; 
        }
        else if (typeof getOperator(values) === 'string') { 
          values.pop(); 
          values.push('+'); 
          inputs.textContent = values.join(''); 
        } 
        else if (getOperator(values) === undefined) {
          values.push('+')
          inputs.textContent = values.join('')
        }
        else {
          inputs.textContent = operate(values).toFixed(3); 
          values.length = 0; 
        }
        break; 
      case 'btnDiv17': 
        values.pop(); 
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv18': 
        values.push(0);
        inputs.textContent = values.join(''); 
        break; 
      case 'btnDiv19': 
        let a = getA(values); 
        let b = getB(values); 

        if (values.length === 0) {
          break; 
          }
        else if (typeof parseFloat(values[values.last()]) === 'number' && a % 1 === 0 && values[values.last()] !== '.') {
          values.push('.'); 
          inputs.textContent = values.join(''); 
        }       
        else if (typeof parseFloat(values[values.last()]) === 'number' && b % 1 === 0 && values[values.last()] !== '.') { 
          values.push('.'); 
          inputs.textContent = values.join(''); 
        }
   
        else {
          break; 
        }
        break;
      case 'btnDiv20':
        if (typeof parseFloat(inputs.textContent) === 'number' && values.length === 0) { 
          let input = parseFloat(inputs.textContent) 
          values.push(input); 
          inputs.textContent = values.join(''); 
        }
        else if (operate(values) === "Don't be silly") { 
          inputs.textContent = "Don't be silly";
          values.length = 0; 
        }
        else if (operate(values) === undefined|| isNaN(operate(values)) || values.length === 0) {
          break; 
        }
        else if (operate(values) % 1 === 0) {
          inputs.textContent = operate(values); 
          values.length = 0; 
        }
        else {
          inputs.textContent = operate(values).toFixed(3); 
          values.length = 0; 
        }
        break;
        }
    }

function getOperator(values) { 
  let op; 
  values.forEach(item => { 
    if (item === '÷' || item === '*' || item === '-' || item === '+' || item === '√') {
      op = item; 
    }
  });

  return op; 
}


function getA(values) { 
  let op = getOperator(values)
  let opIndex = values.indexOf(op); 
  let a; 
  let lhs; 

  if (op === undefined  & values.length > 0)  { 
    lhs = values.join(""); 
    a = parseFloat(lhs); 
  } 
  else { 
    lhs = values.slice(0, opIndex).join("");
    a = parseFloat(lhs);
  } 
  return a; 
  } 

Array.prototype.last = function () {
  return this.length > 0 ? this.length - 1 : -1; 
}

function getB(values) { 
  let op = getOperator(values);
  let index = values.last();
  let rhs; 
  for (let i = index; i > 0; i--) {
    if (values[i] === op) break;
    rhs = values.slice(i, index +1).join("");
  }
  let b = parseFloat(rhs); 
  return b; 
  }

calculator.addEventListener('click', handleClick); 
