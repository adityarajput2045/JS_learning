//Array
//Declaration of Array
const myArr = [0,1,2,3,4,5]
const heros = ["Shaktimaan","Naagraj"]
const arr = new Array(1,2,3,4)

console.log(arr)

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


//Arrray method
arr.push(6) //Add 6 from backside
arr.push(7)  //Add 7 from backside
console.log(arr)

arr.pop()
console.log(arr) //Remove the element from backside

arr.unshift(9)
console.log(arr) // Add element from left side(front)

arr.shift()
console.log(arr) //Remove the element from left side(front)

console.log(arr.includes(9))  // Is 9 is availble on this array ..False

console.log(arr.indexOf(3)) // Find the index notes: If the index is not available the output will -1

console.log(arr)
console.log(typeof arr)

const newArr = arr.join()
console.log(typeof newArr)

//Slice splice
console.log(arr)
const myArr1 = arr.slice(1,3)
console.log(myArr1)
console.log(arr)
const myArr2 = arr.splice(1,3)
console.log(myArr2)

//Array vs Array operation
const male = ["Shyam","Rakesh","Nikhil"]
const female = ["Radha","Rani","Vaishu"]
male.push(female)
console.log(male)  // Output: [ 'Shyam', 'Rakesh', 'Nikhil', [ 'Radha', 'Rani', 'Vaishu' ] ]
console.log(male[3][2]) // Vaishu
//Flatten
const studentList = male.flat()
console.log(studentList) //Output:  [ 'Shyam', 'Rakesh', 'Nikhil', 'Radha', 'Rani', 'Vaishu']

//Concate
const male1 = ["Shyam","Rakesh","Nikhil"]
const female2 = ["Radha","Rani","Vaishu"]
const student = male1.concat(female2)
console.log(student)  //Output:  [ 'Shyam', 'Rakesh', 'Nikhil', 'Radha', 'Rani', 'Vaishu']

//spread operator
const male3 = ["Shyam","Rakesh","Nikhil"]
const female3 = ["Radha","Rani","Vaishu"]
const allStudent = [...male3, ...female3]
console.log(allStudent)  //Output:  [ 'Shyam', 'Rakesh', 'Nikhil', 'Radha', 'Rani', 'Vaishu']

//Other Way to create array
console.log(Array.isArray("DataDeiver"))
console.log(Array.from("DataDeiver"))

let science = 95
let maths = 64
let hindi = 98
const totalMarksArray = Array.of(science,maths,hindi)
console.log(totalMarksArray)



