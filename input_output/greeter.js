// let rlSync = require('readline-sync');
// let name = rlSync.question("What's your name?\n");


function getName(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}

let firstName = getName("whats first ")
let lastName = getName("whats last ")
let name = firstName + " " + lastName


console.log(`Good Morning, ${name}!`);
