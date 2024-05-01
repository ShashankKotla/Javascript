//objects are created by 2 ways: 1.literals 2.constructors
//singleton - just single object, created by constructors.

//object literals - We can define n number of types.
const mySym = Symbol("key1");
const JsUser = {
    name : "shashank",
    "fullName" : 'Shashank K',
    [mySym] : "Key2",
    age : 20,
    location : "Hyderabad",
    email : "shashank@google.com",
    isLoggedIn : false,
    lastLoginDays: ['Friday', "Monday"]
}

//2 ways to access objects 
// console.log(JsUser.email); //type-1
// console.log(JsUser["email"]); //type-2
// console.log(JsUser["fullName"]);

// console.log(JsUser);

JsUser.email = "Shashank@apple.com"
// Object.freeze(JsUser)
JsUser.email = "Shashank@microsoft.com"
// console.log(JsUser);


//Declare (Adding) function into JsUser
JsUser.greetings = function () {
    console.log("Hi there!");
}
JsUser.greetings2 = function () {
    console.log(`Hi there! ${this.fullName}`);
}
// console.log(JsUser.greetings());
JsUser.greetings()
console.log(JsUser.greetings);
JsUser.greetings2()

console.log(JsUser);