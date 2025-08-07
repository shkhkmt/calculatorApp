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
  console.log(a); 
  console.log(b); 
  console.log(operator); 
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

let previousState; 

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
screen.style.alignItems = 'center'; 
screen.style.justifyContent = 'flex-end'; 
screen.style.margin = '2em auto'; 
screen.style.border = '2px solid black'; 

let inputs = document.createElement('p'); 
inputs.textContent = ''; 
inputs.style.fontSize = '3em'; 
inputs.style.display = 'flex'; 
inputs.style.margin = '.5em';  

let inputValues = inputs.textContent
let values = Array.from(inputValues);

screen.appendChild(inputs)

let buttons = document.querySelector('.buttons'); 
buttons.style.width = '520px'; 
buttons.style.height = '590px'; 
buttons.style.display = 'grid'; 
buttons.style.alignSelf = 'stretch'; 
buttons.style.flex = '1 1 auto'; 
buttons.style.gridTemplateColumns = 'auto auto auto auto'; 
buttons.style.margin = '0 2.5em 2.5em 2.5em'; 

let footer = document.createElement('footer'); 
footer.id = 'footer'; 
footer.textContent = 'Copyright © 2025 shkhkmt'; 
content.appendChild(footer); 

for (let i=1; i <= 20; i++) {
  let btnDiv = document.createElement('div'); 
  btnDiv.id = `btnDiv${i}`;
  btnDiv.className = "btn"; 
  btnDiv.style.display = 'flex'; 
  btnDiv.style.borderRadius = '10em'; 
  btnDiv.style.margin = '.5em'; 
  btnDiv.style.justifyContent = 'center'; 
  btnDiv.style.fontSize = '2em'; 
  
  switch (btnDiv.id) {
    case 'btnDiv1': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      let aC = document.createElement('p');
      aC.textContent = 'AC'; 
      aC.style.display = 'flex'; 
      aC.style.justifyContent = 'center'; 
      aC.style.alignSelf = 'center'; 
      aC.style.margin = '0'; 
      btnDiv.appendChild(aC); 
    break; 
    case 'btnDiv2': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      let sqrt = document.createElement('p'); 
      sqrt.textContent = '√x'; 
      sqrt.style.display = 'flex';
      sqrt.style.justifyContent = 'center';; 
      sqrt.style.alignSelf = 'center'
      btnDiv.appendChild(sqrt); 
      break; 
    case 'btnDiv3': 
      btnDiv.style.background = '#8F7A7A';
      btnDiv.style.background = 'linear-gradient(0deg, rgba(143, 122, 122, 1) 0%, rgba(0, 0, 0, 1) 100%)';
      let pcnt = document.createElement('p'); 
      pcnt.textContent = '%'; 
      pcnt.style.display = 'flex'; 
      pcnt.style.justifyContent = 'center'; 
      pcnt.style.alignSelf = 'center'; 
      btnDiv.appendChild(pcnt); 
    break;
    case 'btnDiv4': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      let divide = document.createElement('p'); 
      divide.textContent = '÷'; 
      divide.style.display = 'flex'; 
      divide.style.justifyContent = 'center'; 
      divide.style.alignSelf = 'center'; 
      btnDiv.appendChild(divide); 
    break; 
    case 'btnDiv8': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      let multiply = document.createElement('p'); 
      multiply.textContent = '×'; 
      multiply.style.display = 'flex'; 
      multiply.style.justifyContent = 'center'; 
      multiply.style.alignSelf = 'center'; 
      btnDiv.appendChild(multiply); 
    break; 
    case 'btnDiv12': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)';
      let sbtr = document.createElement('p'); 
      sbtr.textContent = '−'; 
      sbtr.style.display = 'flex'; 
      sbtr.style.justifyContent = 'center'; 
      sbtr.style.alignSelf = 'center'; 
      btnDiv.appendChild(sbtr); 
    break; 
    case 'btnDiv16': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      let add = document.createElement('p'); 
      add.textContent = '+'; 
      add.style.display = 'flex'; 
      add.style.justifyContent = 'center';
      add.style.alignSelf = 'center'; 
      btnDiv.appendChild(add); 
    break; 
    case 'btnDiv20': 
      btnDiv.style.background = '#20D7FF';
      btnDiv.style.background = 'linear-gradient(0deg,rgba(32, 215, 255, 1) 0%, rgba(66, 220, 38, 1) 100%)'; 
      let eql = document.createElement('p'); 
      eql.textContent = '=';
      eql.style.display = 'flex'; 
      eql.style.justifyContent = 'center'; 
      eql.style.alignSelf = 'center'; 
      btnDiv.appendChild(eql); 
    break; 
    case 'btnDiv5': 
      let svn = document.createElement('p');
      svn.textContent = '7'; 
      svn.style.display = 'flex'; 
      svn.style.justifyContent = 'center'; 
      svn.style.alignSelf = 'center'; 
      btnDiv.appendChild(svn); 
    break;
    case 'btnDiv6': 
      let eight = document.createElement('p'); 
      eight.textContent = '8'; 
      eight.style.display = 'flex'; 
      eight.style.justifyContent = 'center'; 
      eight.style.alignSelf = 'center'; 
      btnDiv.appendChild(eight); 
    break; 
    case 'btnDiv7': 
      let nine = document.createElement('p'); 
      nine.textContent = '9'; 
      nine.style.display = 'flex'; 
      nine.style.justifyContent = 'center'; 
      nine.style.alignSelf = 'center'; 
      btnDiv.appendChild(nine); 
    break; 
    case 'btnDiv9': 
      let four = document.createElement('p'); 
      four.textContent = '4'; 
      four.style.disply = 'flex'; 
      four.style.justifyContent = 'center'; 
      four.style.alignSelf = 'center'; 
      btnDiv.appendChild(four); 
    break; 
    case 'btnDiv10': 
      let five = document.createElement('p'); 
      five.textContent = '5'; 
      five.style.display = 'flex'; 
      five.style.justifyContent = 'center'; 
      five.style.alignSelf = 'center'; 
      btnDiv.appendChild(five) 
    break; 
    case 'btnDiv11': 
      let six = document.createElement('p'); 
      six.textContent = '6'; 
      six.style.display = 'flex'; 
      six.style.justifyContent = 'center'; 
      six.style.alignSelf = 'center'; 
      btnDiv.appendChild(six); 
    break; 
    case 'btnDiv13': 
      let one = document.createElement('p'); 
      one.textContent = '1'; 
      one.style.display = 'flex'; 
      one.style.justifyContent = 'center'; 
      one.style.alignSelf = 'center'; 
      btnDiv.appendChild(one); 
    break; 
    case 'btnDiv14': 
      let two = document.createElement('p'); 
      two.textContent = '2'; 
      two.style.display = 'flex'; 
      two.style.justifyContent = 'center'; 
      two.style.alignSelf = 'center'; 
      btnDiv.appendChild(two); 
    break; 
    case 'btnDiv15': 
      let three = document.createElement('p'); 
      three.textContent = '3'; 
      three.style.display = 'flex'; 
      three.style.justifyContent = 'center'; 
      three.style.alignSelf = 'center'; 
      btnDiv.appendChild(three); 
    break; 
     case 'btnDiv18': 
      let zero = document.createElement('p'); 
      zero.textContent = '0'; 
      zero.style.display = 'flex'; 
      zero.style.justifyContent = 'center'; 
      zero.style.alignSelf = 'center'; 
      btnDiv.appendChild(zero); 
    break; 
    case 'btnDiv19': 
      let decimal = document.createElement('p'); 
      decimal.textContent = '.'; 
      decimal.style.display = 'flex'; 
      decimal.style.justifyContent = 'center'; 
      decimal.style.alignSelf = 'center'; 
      btnDiv.appendChild(decimal); 
    break; 
    case 'btnDiv17': 
      let backspace = document.createElement('p'); 
      backspace.textContent = '⬅︎'; 
      backspace.style.display = 'flex'; 
      backspace.style.justifyContent = 'center'; 
      backspace.style.alignSelf = 'center'; 
      btnDiv.appendChild(backspace); 
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
          if (values.length === 0 || values[values.last()] === '÷' || typeof getOperator(values) === 'string' || values[values.last()] === '.') { 
            break; 
          }
          else if (getOperator(values) === undefined){
          values.push('÷');
          inputs.textContent = values.join('');  
          } 
          else {
            inputs.textContent = operate(values).toFixed(2); 
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
        if (values.length === 0 || values[values.last()] === '*' || typeof getOperator(values) === 'string' || values[values.last()] === '.')  { 
          break; 
        } 
        else if (getOperator(values) === undefined) {
          values.push('*')
          inputs.textContent = values.join(''); 
        }
        else {
          inputs.textContent = operate(values).toFixed(2); 
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
          if (values.length === 0 || values[values.last()] === '-' || typeof getOperator(values) === 'string' || values[values.last()] === '.')  { 
            break; 
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
          if (values.length === 0 || values[values.last()] === '+' || typeof getOperator(values) === 'string' || values[values.last()] === '.') {
            break; 
          }
          else if (getOperator(values) === undefined) {
            values.push('+')
            inputs.textContent = values.join('')
          }
          else {
            inputs.textContent = operate(values).toFixed(2); 
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
        console.log(a); 
        console.log(b); 

        if (values.length === 0) {
          break; 
          }
        else if (typeof parseFloat(values[values.last()]) === 'number' && b % 1 === 0 && values[values.last()] !== '.') { 
          values.push('.'); 
          inputs.textConent = values.join(''); 
        }
        else if (typeof parseFloat(values[values.last()]) === 'number' && a % 1 === 0 && values[values.last()] !== '.') {
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
        else if (operate(values) === undefined|| isNaN(operate(values)) || values.length === 0) {
          break; 
        }
        else {
          if (getB(values) !== 0) {
            inputs.textContent = operate(values).toFixed(2); 
            values.length = 0; 
          }
          else {
            inputs.textContent = operate(values); 
            values.length = 0; 
          }
          break;
        }
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
