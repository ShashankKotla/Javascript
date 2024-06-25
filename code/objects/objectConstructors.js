/*
OBJECT CONSTRUCTOR FUNCTIONS

1. Sometimes we need to create many objects of the same type.
2. To create an object type we use an object constuctor function.
3. It is considered good practice to name constructor functions with an upper-case first letter.
 */

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     // this.nationality="English";
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Really", 18, "green")
// const mySelf = new Person("Johnny", "Really", 22, "green");


// Adding property to an created object is easy (myFather)
// myFather.nationality="Hindi";
// console.log(myFather);

/*
Adding a property to a constructor 
1.You can Not add a new property to an object constructor.(will get undefined)
2. To add a new property, you must add it to the constructor function prototype (will get English)
Person.ProtoType.nationality = "English";
*/
// Person.nationality = "french";
// console.log(myFather.nationality);
// Person.prototype.nationality = "English";
// console.log(myFather.nationality);

/*
Constructor Function Methods 
A Constructor Function can also have methods:
*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}
const myMother = new Person("Sally", "Rally", 48, "green");
// console.log(myMother.fullName());
//Adding a method to an created object is easy
// myMother.changeName = function (name) {
//     this.lastName = name;
// }
// myMother.changeName("Text");
// console.log(myMother.lastName);


/*
Adding a new method must be done to the constructor function prototype
 */
// Person.prototype.changeName = function (name){
//     this.lastName = name;
// }
// myMother.changeName('Alex')
// console.log(myMother.lastName);
// console.log(new Function());

/*
Built-in JS Constructors
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object


Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().
*/