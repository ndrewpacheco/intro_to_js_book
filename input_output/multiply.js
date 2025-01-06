// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

// let rlSync = require('readline-sync');
// let name = rlSync.question("What's your name?\n");


function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseInt(rlSync.question(prompt))
}

let firstName = getNumber("Enter the first number:")
let lastName = getNumber("Enter the second number:")
let result = firstName * lastName


console.log(`${firstName} * ${lastName} = ${result}`);
