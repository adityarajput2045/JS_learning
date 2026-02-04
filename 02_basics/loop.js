//For Loop
let x = 5
for (let i = 1; i <= 10; i++) {
  console.log(x * i); 
}

let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 
}

//Other unvisible loop
let y = 2;

for (; y <= 4; y++) {
    console.log("Value of y:" + y); // 2 3 4
}

for (; ; y++) {
    console.log("Value of y:" + y);  // 2
    break;
}

//While loop
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

let arr1 = [10, 20, 30, 40];
let i = 0;
while (i < arr1.length) {
  console.log(arr1[i]);
  i++;
}

//do-while loop
let count1 = 1;
do {
  console.log(count);
  count1++;
} while (count1 <= 5);