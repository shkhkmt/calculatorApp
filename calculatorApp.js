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
  return math.sqrt(a)
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
    case "÷": 
      return divide(a, b) 
      break;
    case "√": 
      return sqrt(a); 
  }
}


let a, b, operator; 

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
      sqrt.textContent = '√'; 
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
      values.push('√');
      inputs.textContent.join = values.join('');  
      break; 
    case 'btnDiv3': 
      values.push('%'); 
      inputs.textContent = values.join('');  
      break; 
    case 'btnDiv4': 
      values.push('÷');
      inputs.textContent = values.join('');  
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
      values.push('*')
      inputs.textContent = values.join(''); 
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
      values.push('-'); 
      inputs.textContent = values.join(''); 
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
      values.push('+');
      inputs.textContent = values.join('');
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
      values.push('.'); 
      inputs.textContent = values.join(''); 
      break; 
    case 'btnDiv20':
      getOperator(values); 
      getA(values); 
      getB(values); 
      inputs.textContent = operate(operator, a, b); 
      break; 

  }
  return console.log(target.id); 
}


function getOperator(values) { 
  let operater; 
  
  values.forEach(item => { 
    if (isNaN(item)) {
      operator =  item; 
    }
  });

  return operator; 
}

function getA(values) {  
    let lhs;
    for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'number') break;
      lhs = values.slice(0, values[i]).join("");
    }
    return a = parseInt(lhs);  
  } 

function getB(values) { 
  let rhs; 
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] !== 'number') break; 
      rhs = values.slice(i, -1).join("");  
    }
    return b = parseInt(rhs); 
}



calculator.addEventListener('click', handleClick); 
