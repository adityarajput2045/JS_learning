//Object

let obj1 = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj1);

//Other Ways
let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"
console.log(obj);

//Accessing object properties
let obj5 = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log(obj5.name);

// Using Bracket Notation
console.log(obj5["age"]);

const user = {
    username: "datadeiver",
    age: 22,
    welcomeMessage: function(){
        console.log(`${this.usrename} , Welcome the this website`)
    }
}
user.welcomeMessage()

user.usrename = "Sam"
console.log(user.usrename)
user.welcomeMessage()

let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
} 

console.log(delete emp.salary); 
console.log(emp);

//Merging
let obj4 = { name: "Sourav" };
let obj2 = { age: 23};

let obj3 = { ...obj4, ...obj2 };
console.log(obj3);

//Adding and modifing
let obj6 = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
obj6.gender = 'male'; // Adding a new property
obj6.age = 26;          // Modifying an existing property
console.log(obj6);

//Deleting
let obj7 = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
delete obj7.isActive;
console.log(obj7);

//Iterate over a JavaScript object
function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };
    for (let key in exampleObj) {
        if (exampleObj.hasOwnProperty(key)) {
            value = exampleObj[key];
            console.log(key, value);
        }
    }
}
iterateObject();

//with keys
function iterateObject1() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };
    Object.keys(exampleObj).forEach(key => {
        const value = exampleObj[key];
        console.log(`\${key}: \${value}`);
    });
}
iterateObject1();

//How Shallow and deep Copy Work
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

console.log("Employee=> ", employee);

// Shallow copy
let newEmployee = { ...employee };    
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";

console.log("Employee=> ", employee);        
console.log("New Employee=> ", newEmployee);

//Deep copy
console.log("=========Deep Copy========");
let newEmployee2 = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee2=> ", newEmployee2);
console.log("---------After modification---------");
newEmployee2.ename = "Beck";
newEmployee2.salary = 70000;
console.log("Employee2=> ", employee);
console.log("New Employee2=> ", newEmployee2);


//Play with object as json fie
const lodash = require('lodash');
let employee1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee1 Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee1);
console.log("Original Employee1 Object");
console.log(employee1);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee1.details());
console.log(deepCopy.details());