// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];


// function evenNums(arr) {
//   arr.flat().forEach(el => el % 2 === 0 && console.log(el))
// }

// evenNums(myArray)

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];


// let newArray = myArray.map(el => el % 2 === 0 ? 'even' : 'odd')

// function findIntegers(params) {
//   return params.filter(el => Number.isInteger(el))
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]




// function oddLengths(arr) {
//   return arr.map(el => el.length).filter(el => el % 2 !== 0)
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]



// function sumOfSquares(arr) {
//   return arr.reduce((acc, el) => acc + (el * el), 0)
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83


// function oddLengths(arr) {
//   return arr.reduce((acc, el) => {

//     if (el.length % 2 !== 0) acc.push(el.length)
//     return acc
//   }, [])
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]



let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree(arr) {
  return arr.filter(el => el === 3).length !== 0

}

console.log(hasThree(numbers1))
console.log(hasThree(numbers2))
console.log(hasThree(numbers3))