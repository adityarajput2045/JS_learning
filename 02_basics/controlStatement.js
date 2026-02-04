//if Statement
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

//if...else Statement
const score = 40;
if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("You failed.");
}

//if...else if...else Statement
const temp = 25;
if (temp > 30) {
    console.log("It's hot.");
} else if (temp >= 20) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}

//switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the workweek.");
        break;
    default:
        console.log("It's a regular day.");
}

//Ternary Operator or Conditional Operator
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");