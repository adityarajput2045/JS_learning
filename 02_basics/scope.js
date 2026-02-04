if (true) {
    var x = 10;
    let y = 20;
}

console.log(x);  // 10 (var is function-scoped)
console.log(y);  // Error (let is block-scoped)

if (true) {
  var a = 10; 
}

// Accessible outside the block
// because we are in same function
console.log(a);

// var is function scoped: Can be accessed outside block if within the function.

if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError
// let and const are block scoped : Cannot be accessed outside block even if inside the same function

const ob = { a: 10 };
ob.a = 20; // Allowed

const arr = [10, 20, 30]
arr[2] = 40
console.log(arr)
/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] */
