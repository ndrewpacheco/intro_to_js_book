// exercises.js

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;

//   }
//    return result

// }

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let tries = 0;
// let result;

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2)


// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');



function factorial(n) {

  if (n === 1) return 1;
  return factorial(n - 1) * n

}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320