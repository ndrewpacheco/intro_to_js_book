// false || (true && false);  false
// true || (1 + 2); true
// (1 + 2) || true; 3
// true && (1 + 2); 3
// false && (1 + 2); false
// (1 + 2) && true; true
// (32 * 4) >= 129;  false
// false !== !true; false
// true === 4; false
// false === (847 === '847'); true
// false === (847 == '847'); false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  true


// function evenOrOdd(num) {
//   console.log(num % 2 === 0 ? 'even' : 'odd')
// }

// evenOrOdd(2)
// evenOrOdd(3)

// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

// function allCaps(str) {
//   return str.length > 10 ? str.toUpperCase() : str
// }

// allCaps('abgssfdggsdfgfgsfgfgf')
// allCaps('sdfdf')

// console.log(false ?? null); false
// console.log(true ?? (1 + 2)); true
// console.log((1 + 2) ?? true); 3
// console.log(null ?? false); false
// console.log(undefined ?? (1 + 2)); 3
// console.log((1 + 2) ?? null); 3
// console.log(null ?? undefined); undefined
// console.log(undefined ?? null); null


// function show(foo = undefined, bar = null) {
//   console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
// }

// show(5, 7); 5, 7
// show(0, 0); 0, 0
// show(4); 4, 42
// show(); 3, 42