//Datatypes - They are divided into 2 categories the basics of
// "How the data is kept  in the memory & accessed on the basis of data."

// Primitive -> String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;  // this decimal also comes under number category.

const isLoggedIn = false; 
const outSideTemp = null; // null means empty

let userEmail;

// console.log(typeof(score)); //number
// console.log(typeof(scoreValue)); //num
// console.log(typeof(isLoggedIn)); // bool
// console.log(typeof(outSideTemp)); //object
// console.log(typeof(userEmail)); //undefined.

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId); // Both are different.
// console.log(typeof id) //symbol

const bigNumber = 34788758493030574939n; //This is big int,By defining 'n' at the end it makes bigInt.
// console.log(typeof bigNumber); //bigInt


//Reference Type (non-premitive) -> Array, objects, functions

// const heros = ["shaktiman", "naagraj", "doga"]; //Array
// console.log(typeof heros); //object
// let myObj = {
//     name : 'code',
//     age : 22
// };
// console.log(typeof myObj); //object
// -------- Function -------
// const myFunction = function(){
//     console.log('Hello World');
// };

// myFunction()
// console.log(typeof myFunction); //function



// ++++++++++++++++++++++++++STACK & HEAP ++++++++++++++++++++++++++++++++++++++++++++

//STACK - It gives a copy & only copy value will be changed.

let myYoutubeName = "hiteshchoudarydotcom";
let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log("my youtube name is :",myYoutubeName);
console.log("my another youtube name is:",anotherName); 

//Heap - It gives a reference & Actual value will be changed.

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);