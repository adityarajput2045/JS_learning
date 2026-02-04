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

