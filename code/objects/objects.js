// Objects - It is a variable too, but obj contains many values.

// const car = {
//     type : "Flat",
//     model:"500",
//     color:"white"
// }

// const car = {}

// car.type = "Flat";
// car.model = 500;
// car.color = "white";

// document.getElementById('obj').innerHTML=car.model;

// How to define a JS Object :-
/* Using an object Literal-> 
1. list of name:value pairs inside curly braces{}.
2. name:value pairs are also called key:value pairs.
3.Object literals are also called Object initializers
*/

/* Using the new Keyword, creates using "new Object()"
"For readability, simplicity and execution speed, use the object literal method."
*/
// const person = new Object(
//     // firstName = "john",
//     // lastName = "wick"
// );
//     person.firstName = "john",
//     person.lastName = "wick"
// document.getElementById('obj').innerHTML=person.firstName;

// 3. Using an Object Constructor



/* Object Properties -> "named value", in JS objects are called properties.

(property)firstName : "John" (value)
*/
// const car = {
//         type : "Flat",
//         model:"500",
//         color:"white"
//     }
// Accessing obj properties in 2 way's.
// console.log(car.type);
// console.log(car['model']);


// JS object Methods
/*
1. Objects are containers for Properties and Methods.
2. Properties are named Values.
3. Methods are Functions stored as Properties.
4. Properties can be primitive values, functions, or even other objects.

Note: 
    In JavaScript, almost "everything" is an object.

    Objects are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Arrays are objects
    Maps are objects
    Sets are objects
    All JavaScript values, except primitives, are objects.
 */
// const car = {
//         fullName: "John Wick",
//         type : "Flat",
//         model:"500",
//         color:"white",
//         fullName : function() {
//             return this.fullName + ' ' + this.model;
//         }
//     }

/* JavaScript Primitives-> value that has no properties or methods. 

=> It has only primitive values like, 3.14
=>Primitive DT -> Numbers, Strings, Boolean, null, undefined, symbol,bigint.
*/


/* JS Objects are Mutable -> they are addressed by reference, not by value.
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10;

If person is an object, the following statement will not create a copy of person:
The object x is not a copy of person. The object x is person.

The object x and the object person share the same memory address.

 */


/*
-> An Object is an unordered collection of properties
Properties are the most important part of JavaScript objects.
Properties can be changed, added, deleted, and some are read only.

Accessing:
1. person.age // objectName.property
2. person['age'] //objectName["property"]
3. person[x] //objectName[expression]
 */

// Adding new properties
// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50, 
//     eyeColor:"blue"
//     }

// person.madeIn = "USA";
// console.log(person);

// delete person.age //deletes both property & it's value.
// console.log(person);


// Nested Objects

// let myobj = {
//     name:"John",
//     age:30,
//     myCars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3:"Flat"
//     }
// }

// console.log(myobj.myCars.car2);
// console.log(myobj.myCars["car2"]);
// console.log(myobj['myCars']["car2"]);




