//  Number
//Way to declare number in JS
const score = 400;
const balance = new Number(100);

const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log(biggestNum)
console.log(smallestNum)
console.log(infiniteNum)
console.log(negInfiniteNum)
console.log(notANum)

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

const num = 123.2546
console.log(num.toPrecision(3));

//Maths
console.log(Math);
console.log(Math.abs(4.3))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,5,6,3))
console.log(Math.max(4,5,6,3))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10)+1)
