//Print Something in JavaScript
console.log("Hello Aditya")
console.log(500)
console.log("Aditya",500)

//Variables

let name = "Data Deiver"
let assign = "Web Developer or Data Annalyst"
let roll;

console.log(name)
console.log(assign)
console.log(roll) // Undefined
console.log(`I am ${name} and I assign as ${assign}`)

//Three way to create variables
//Use case of let

let idol = "Rohit Sharma"
console.log(idol)
idol = "Viral Kohli"
console.log(idol)

//Use case of var
var singer = "Arijit Singh"
console.log(singer)
singer =  "AP Dhillon"
console.log(singer)

//Use case of const
const pi = 3.14
console.log(pi)
// pi = 3.25
console.log(pi) // Here It will be throw error because of const

// Data Types
//String
let firstName = "Data"
let secondName = "Deiver"

console.log(firstName, secondName)

let string1 = new String("Data Deiver")
console.log("String:", string1)
console.log(typeof string1)
console.log(typeof(string1)) // Check the type of data

//Number
let moviePrice = 249
let price = 8.5
let rating = 4
let valueNumber = new Number(55)
console.log("ValueNumber", valueNumber)

//Boolean
let isRaining = true
let isRight = false

//Undefined and null
let subjectName;

//Object /
const userDetails = {
    otherName:"Ninjas",
    instagram:"data_deiver9",
    youtube:"Data_Deiver"
}

//Type Casting : to change the dataTypes to another datatypes

let num1 = "99"
let num2 = "101"
console.log("num1:", num1, typeof(num1))
console.log("num2:", num2, typeof(num2))
let sumOfString = num1 + num2
console.log(`Sum of ${num1} and ${num2} is equal to ${sumOfString}`)
//After the typecasting
num1 = Number(num1)
console.log("num1:", num1, typeof(num1))
num2 = Number(num2)
console.log("num2:", num2, typeof(num2))
let sumofNumber = num1 + num2
console.log(`Sum of ${num1} and ${num2} is equal to ${sumofNumber}`)