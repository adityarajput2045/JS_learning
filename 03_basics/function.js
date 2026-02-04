//Functions in JavaScript
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}
greet("Data Deiver");  // "Data Deiver" is the argument


function greet1(name = "Data") {
  console.log("Hello, " + name);
}
greet1();
greet1("Deiver");


function add(a, b) {
  return a + b; // returns the sum
}
let result = add(5, 10);
console.log(result);

//Types of function
//Named Function
function greet2() {
  return "Hello!";
}
console.log(greet2());

//Function Expression
const mul = function(a, b) {
  return a * b;
};
console.log(mul(2, 3));

//Arrow Function (ES6)
const square = n => n * n;
console.log(square(4));

//Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This runs immediately!");
})();

// Callback Functions
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("Neha", 22);
console.log(user.name);

//Async Function
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

//Generator Function
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);

//  Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Higher-Order Function
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
const double1 = multiplyBy(2);
console.log(double1(5));

// Nested Functions
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));

//Pure Functions
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));

//Rest Parameter Function
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));


// HOF in datails
function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action(); // Not a inbuilt function
    action();
}
fun2(fun);

//  Higher Order Functions in JavaScript
// 1. map
const n1 = [1, 2, 3, 4, 5];
const square1 = n1.map((num) => num * num);
console.log(square1);

// 2. filter
const n2 = [1, 2, 3, 4, 5];
const even2 = n2.filter((num) => num % 2 === 0);
console.log(even2);

// 3. reduce
const n3 = [1, 2, 3, 4, 5];
const sum3 = n3.reduce((acc, curr) => acc + curr, 0);
console.log(sum3);

// 4. forEach
const n4 = [1, 2, 3];
n4.forEach((num) => console.log(num * 2));

// 5. find
const n5 = [1, 2, 3, 4, 5];
const fEven5 = n5.find((num) => num % 2 === 0);
console.log(fEven5);

// 6. some
const n6 = [1, 2, 3, 4, 5];
const hasNeg6 = n6.some((num) => num < 0);
console.log(hasNeg6);

// 7. every
const n7 = [1, 2, 3, 4, 5];
const allPos7 = n7.every((num) => num > 0);
console.log(allPos7)

//8 curring
function mul8(x) {
    return function(y) {
        return x * y;
  };
}
var mulFn8 = mul8(2);
console.log(mulFn8(5));

//Use case
// Passing Functions as Arguments
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Ajay", sayGoodbye);

//Returning Functions from Functions
function mul(factor) {
    return function(num) {
        return num * factor;
    };
}
const mul2 = mul(2);
console.log(mul2(5));
const mul3 = mul(3);
console.log(mul3(5));

// Array Method map() as a Higher-Order Function
const a8 = [1, 2, 3, 4, 5];
const double8 = a8.map(function(n) {
    return n * 2;
});
console.log(double8);

//  Array Method filter() as a Higher-Order Function
const a9 = [1, 2, 3, 4, 5];
const even9 = a9.filter(function(n) {
    return n % 2 === 0;
});
console.log(even9);

//Array Method reduce() as a Higher-Order Function
const n10 = [1, 2, 3, 4, 5];
const sum10 = n.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum);