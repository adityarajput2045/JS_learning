// Operator
let a = 2, b = 3

//Arithmetic
// + - * / ** %

let sum = a + b
console.log("Sum",(sum))

let sub = a + b
console.log("Subtract",(sub))

let mul = a * b
console.log("Multiplication",(mul))

let div = a / b
console.log("Divide",(div))

let modulo = a % b
console.log("Modulo",(modulo))

let aToThePowerb = a**b
console.log("A to the power b",aToThePowerb)

//Comparison Operator
//>, =>, <, <=, ==, ===

const m = 7, n = 8

console.log(m > n)  // False
console.log(m >= n) // False
console.log(m < n)  // True
console.log(m <= n)  // True
console.log(m == n)  // False

// Difference between == and ===
// == does not check the datatypes and === can check element and datatype as well
console.log(7 == "7") // True
console.log(7 === "7") // False
console.log(7 === 7)  // True

//Logical Operator
// and operator
console.log(false && false) //false
console.log(false && true) //false
console.log(true && true) //true
console.log(true && false) //false

// or operator
console.log(false || false) //false
console.log(false || true) //true
console.log(true || true) //true
console.log(true || false) //true

//Bitwise operator
//bitwise and  &
//bitwise or  |
//bitwise not  -
//bitwise xor  ^

console.log(5 & 7) // 5
console.log(8 | 5) // 13
console.log(5 - 7)  // -2
console.log(5 ^ 7)  // 2

