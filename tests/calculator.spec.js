const sum = require('./sum'); 
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide') 

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); 
  }); 
});

describe('subtract', () => {
  test('subtracts 3 - 2 to equal 1', () => { 
    expect(subtract(3, 2)).toBe(1);   
  }); 
}); 

describe('multiply', () => { 
  test('multiplies 4 * 4 to equal 16', () => { 
    expect(multiply(4, 4)).toBe(16); 
  }); 
});  

describe('divide', () => {
  test('divides 12 / 3 to equal 4', () => { 
    expect(divide(12, 3)).toBe(4); 
  }); 
}); 
