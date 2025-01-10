// let myArray = {
//   0: 0,
//   1: 2,
//   2: 3,
//   length: 3
// };

// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }





// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// console.log(Object.keys(obj).map(el => el.toUpperCase()))
// console.log(obj)





// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj)

// myObj.qux = 3;

// "foo"  prim
// 3.1415 prim
// [ 'a', 'b', 'c' ] obj
// false prim
// foo neither
// function bar() { return "bar"; } obj
// undefined prim
// { a: 1, b: 2 } obj



// function copyObj(obj, arr = []) {
//     if (arr.length === 0) return {...obj};

//     return arr.reduce((acc, ele) => {
//       acc[ele] = obj[ele]
//       return acc
//     }, {})

// }

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
// console.log(objToCopy)
// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }
// console.log(objToCopy)
// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }
// console.log(objToCopy)


// function foo(bar) {
//   console.log(bar, bar, bar);
// }
// let bar = foo
// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"


// function hello(greeting, name) {
//   return greeting + ' ' + name;
// }

// function xyzzy() {
//   return { a: 1, b: 2, c: [3, 4, 5], d: {} };
// }

// const howdy = hello('Hi', 'Grace');
// let foo = xyzzy();

// variables: hello, xyzzy, howdy, foo, greeting, name
// obj prop names: a, b, c, d
// primitives: 1 2 3 4 5, hi, grace, ' '
// { a: 1, b: 2, c: [3, 4, 5], d: {} }, {}[3, 4, 5], function xyzzy(), function hello(greeting, name)


function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// variables: bar, arg1, arg2, foo, qux. result
// prop names: abc
// def
// ghi
// jkl
// mno
// pqr
// 0,1,2,3

// primitives: 'Hello, 1 2 3 4 5 6, null, nan, victor, antonia
// obj: bar, quz,[1, 2, 3, [4, 5, 6]]