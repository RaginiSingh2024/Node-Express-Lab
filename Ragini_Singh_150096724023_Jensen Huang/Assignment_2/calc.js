// Assignment 2: Create a module calculator and publish it

// calc.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// Step 3: Modify calc.js (Add multiply and divide)

// calc.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero!";
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
