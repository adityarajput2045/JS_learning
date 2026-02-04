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