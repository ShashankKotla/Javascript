// console.log("Hello");

// console.log(1<<2.34);

// console.log((1+3) * 2);

// Not-real-number
// console.log(typeof(Infinity), '->',Infinity);
// console.log(typeof(-Infinity), '->',-Infinity);
// console.log(typeof(NaN), '->',NaN);

// console.log(`true : ${(true)}, false: ${false}`);
// console.log(`Negation'!'->true : ${(!true)}, false: ${!false}`);

// console.log(1===1);
// console.log(1!==1);
// console.log(2===1);
// console.log(2!==1);

// String

// console.log("Hello" + 3);
// console.log("Hello" + ["world", "!"]);

// console.log('5'===5);
// console.log(null===undefined);

// console.log('India is my country'.charAt(0)); //to access a  single character

// console.log("India is my country".substring(0,5));//get multi characters
// console.log("India".length);

// console.log(typeof null); //it's an object & indicates a deliberate non-value

// console.log(typeof undefined); //it's an value 

// var test; //undefined

// let someVar = 5;
// let someVarr = someVar++;
// console.log(someVarr);
// console.log(someVar);

// let someVar4 = 5
// let someVar5 = ++someVar4;
// console.log(someVar5);
// console.log(someVar4);

// let someVar2 = 10;
// console.log(someVar2 *= 10);
// someVar++
// someVar--
// console.log(someVar);

/* 
Array -> array's are ordered lists of values, of any type.

*/ 

// let arr = ['Hello', 45, true];
// arr.push('world');

// console.log(arr.length);

// console.log(arr[3]);

// arr.unshift(3); //add first element.
// arr.shift(); //removes the first element
// arr.pop(); //removes the last element

//Join all elements of an array with semicolon
// let myarr = [32, false, "js", 12, 56, 90];
// console.log(myarr.join(";"));

// console.log(myarr.slice(1,4)); //get sub-elements from a range

// myarr.splice(2,3, 'hi', 'bye', 'ok'); //remove elements from the start range point and no.of elements to be delete.
// console.log(myarr);

//object.
// let obj = {key1: 'value1', key2:'value2'};
// obj.key3 = true; //add new element in obj
// console.log(obj);
// console.log(obj.key1);


//Conditionals

// var count = 1;
// if (count ==3) {
//     console.log('value is not equal to 3');
// } else if (count==4) {
//     console.log('value is not equal to 4');
// } else {
//     console.log('value is not match for both conditionals');
// }


//while-> loops through a block of code ad long as specified condition is true.
// let val = 1;
// while (val<=3) {
//     console.log(val);
//     val++
// }

// DO-while-loop
// let text = ""
// let i = 0;
// do {
//     text += "The number is " + i +' \n';
//     i++;
// }
// while (i <10){
//     console.log(`${text}`);
// }

// let text = 'The number is ';
// let i = 0
// do {
//     text +=i + '\n';
//     i++;
// }
// while(i<=10){
//     console.log(text);
// }


// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

// let j = 2;
// for (let i = 1; i <=10; i++) {
//     console.log(`${j} x ${i} = ${[j * i]}`);
// }


// outer:
// for (let i = 0; i <=10; i++) {
//     for (let j = 0; j <=10 ;j++) {
//         if (i==5 && j==5) {
//             console.log([i, j]);
//             break outer;
//         }
//     }
    
// }


// for-in, allows iteration over properties of an object
// var description = "";
// var person = {fname:"Paul", lname:"ken", age:18};
// for (var x in person) {
//     description += person[x] + ' ';
//     console.log(description);
// }

/*
for-of, allows iteration over iterable objects 
(include the built-in String, Array-like arguments or NodeList objects, typedArray, Map and Set) and user-defined iterables).
*/
// let myPets = '';
// let pets=['cat', 'dog', 'elephant', 'hippopotamus']
// for (var pet of pets){
//     myPets +=pet + ' ';
//     console.log(myPets);
// }

// let otherName;
// let name = otherName || 'default';
// console.log(name);


/*
switch, checks for equality with '==='
Use 'break after each case.
or the cases after the correct one will be executerd too.
 */
// grade = 'B';
// switch (grade) {
//     case 'A':
//         console.log("Great Job");
//         break;
//     case 'B':
//         console.log("OK Job");
//         break;
//     case 'C':
//         console.log("You can do better");
//         break;
//     default:
//         console.log("Oy vey");
//         break;
// }


// let name = 'shashank';
// switch (name) {
//     case 'shashak':
//         console.log('got matched at first attempt');
//         break;
//     case 'shashank':
//         console.log('got match at second attempt');
//         break
//     case 'sashank':
//         console.log('got match at third attempt');
//         break;
//     default:
//         console.log('No match');
//         break;
// }


// Functions

// function myFunction(thing) {
//     return thing.toUpperCase();
// }
// console.log(myFunction('foo'));

// function myFunction() {
//     return
//     {thisIsAn: 'obj literal'};
// }
// console.log(myFunction());

// function myFunction(){
//     console.log('completed 5 seconds');

// }
// setTimeout(myFunction, 5000); //settime if form browser and nodejs

// setTimeout(function(){console.log('5-seconds');}, 5000); 
/*
Above one is an anonymous function.
Here we can write an anonymous function 
definition directly into the arguments of another */

//Js has function scope; function get their own scope but other blocks do not;
// if (true){
//     var i = 5;
// }
// console.log(i);

// (function() {
//     var temporary = 5;
//     global.permanent = 10; 
// })();

// console.log(global.permanent);


// function sayHelloInFiveSeconds(name){
//     var prompt = 'Hello,' + name + "!";
//     function inner(){
//         alert(prompt);
//     }
//     setTimeout(inner, 5000);
// }


// let myobj = { //obj can contain functions
//     myFunc: function() {
//         return "Hello world"
//     }
// }
// console.log(myobj.myFunc());


// var myObj = { 
//     myStr : "Hi There! Tomas",
//     myFunc: function(){
//         return this.myStr + ' & Jerry'
//     }
// }
// console.log(myObj.myFunc());


/*
what 'this' is set to has to do with how the function is called, not where it's defined. so our function doesn't work if it isn't called in the context of the object.-> In simple terms, " 'this' refers to the object that is executing the current function. It's not about where the function is defined but how it is called. "
// */
// "use strict";
// var fun = myObj.myFunc;
// console.log(fun()); //undefined & Jerry

// var myFunc = myObj.myFunc.bind(myObj) //ensures that `this` inside `greet` will alway's refer's to myObj regardless of how or where 'greet' is called.
// console.log(myFunc()); //Hi There! Tomas & Jerry

/*
Inversily, a function can be assigned to the object and gain access to it through 'this', even if it wasn't attached when it was defined.
 */

// var myOther = function() {
//     return this.myStr.toUpperCase();
// }
// myObj.myOtherFunc = myOther;
// console.log(myObj.myOtherFunc()); //HI THERE! TOMAS

//we can also specify context
// var myObj = {
//     myStr : "Hello World",
//     myFunc: function(){
//         return this.myStr
//     }
// }
// var anotherFunc = function(){
//     return this.myStr.toLowerCase();
// }


// var otherFunc = function(s) {
//     return this.myStr.toLowerCase() + s
// }
// // console.log(otherFunc.call(myObj, " And Hello Moon!"));
// console.log(otherFunc.apply(myObj,[" And Hello Sun!"])); //'apply, It is identical but it takes an array for an argument.

/*
    1. We can also specify a context for a function to execute in when we invoke it using `call` or `apply`.
    2.  But, `call` and `apply` are only temporary. When we want it to stick, we can use `bind`.
 */

// console.log(Math.min(42, 6, 27));
// console.log(Math.max(42, 6, 27));
// console.log(Math.min.apply(Math, [42, 6, 27]));


// var product = function(a,b){ return a* b;};
// var doubler = product.bind(this, 2);
// console.log(doubler(8));

/*
Unlike most other popular object-oriented language, JavaScript has no concept of 'instance' created from 'class' blueprints; Instead, Javascript combines instantiation & inheritance into a single concept; a 'prototype'. 

Every Javascript object has a 'prototype'. When you go to access a property on an object that doesn't exist on the actual object, the interpreter will look at it's prototype.

Some JS implementations let you access an object's prototypes on the magic property called '__proto__' . While this is useful for explainig prototypes it's not part of the standard; we'll get to standard ways of using prototypes later.
 */

