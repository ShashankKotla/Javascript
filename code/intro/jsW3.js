function myFunction() {
    document.getElementById('demo').innerHTML= "Hacked !!!"
}

/*
Javascript Keywords

var -> Declares a variable
let -> Declares a block variable
const -> Declares a block constant
if -> Marks a block of statements to be executed on a condition.
switch -> Marks a block of statements to be executed in different cases.
for -> Marks a block of statements to be executed in different cases.
function -> Declares a function.
return -> Exists a function.
try -> Implements error handling to a block of statements.
$ sign, is not very common in js. but professional programmers often use it as an alias for the main function in a js library.
' _ ' underscore, is not very common in js, but a convention amoung professional programmers is to use it as an alias for 'private (hidden)' vairables.
*/


// const PI = 3.14;
//Note: const->It does not define a constant value.It defines a constant reference to a value. so you can change elements of constant array's & object's.
// console.log(PI);

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota";
// cars.push("Audi");
// console.log(cars);

// const car = {type: "Flat", model: "500", color: "White"};
// car.color = 'red';
// car.owner = 'John';
// console.log(car);
// {
//     const car = {type: "test"}
//     console.log(car);
// }
// {
//     const car = {type: "testOne"}
//     console.log(car);
// }


// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// Arthematic
// let x = 5
// let y = 5
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x % y);
// console.log(x * y);
// console.log(x ** y);

//Comparison
// let x = 5;
// let y = 5;
// console.log(x == y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);
// console.log(x === y);

// let result = x >= y ? "X is greater" : "x is not greater";
// console.log(result);
// Ternary
// syntax : variablename = (condition) ? value1:value2
// let x = 5 > 5 ? "5 is greater than 5" : "Does not make any sence";
// console.log(x);
// age = 15;
// let voteable = (age < 18) ? "Too Young": "Old enough";
// console.log(voteable);

// let text1 = "What a very ";
// text1 += "nice day";
// console.log(text1);

//Logical Operators ," used to determine the logic b/w variables or values. "
// let x = 13;
// let y = 12;
// console.log(x <=10 && y >1);
// console.log(x <=10 || y >1);
// console.log(!(x==y));


// When we compare with str with number. JS converts str to a number.
// console.log(`type: ${(typeof '6'), (typeof 5)} : ${'6'>5}`);
// console.log(`type: ${(typeof '6'), (typeof '5')} : ${'6'>'5'}`);
// console.log(`type: ${(typeof 6), (typeof '5')} : ${6<'5'}`); 

// console.log(`type: ${(typeof 'John'), (typeof 'John')} : ${"John" > "John"}`);

// console.log(2<12);
// console.log(2<'12');
// console.log(2<'John');
// console.log(2>'John');
// console.log(2=="John");
// console.log('2' == 'John');
// console.log('2'<'12');
// console.log('2'>'12');
// console.log("2" == "12");

// Javascript Type Conversion

// 1. Converting strings to Numbers
// console.log(Number(Math.PI));
// console.log(Number('3.14'));
// console.log(Number("")); //returns 0
// console.log(Number("John")); //returns NaN

// let x = 123;
// Number methods
// toString() method
// console.log(x.toString());
// console.log(typeof x.toString());
// console.log((100 + 50).toString());

// toExponential() method
let x = 555.6;
// console.log(x.toExponential(3)); //returns a number with exponential notation 'e' and rounded numbers.

// toFixed() method
// console.log(x.toFixed(2)); //returns a str, with the no. written with a specified number of decimals. (no.of 00 gonna added)

// toPrecision, return a string, with a number written with a specified length.
// console.log(x.toPrecision(3)); //return required length numbers like 564 if we provide parameter 6 then it will return 564.000
// let z = 564
// console.log(z.toPrecision(6)); 

// valueOf(), returns number as number
// console.log(x.valueOf());

// Number() method on dates
// console.log(Number(new Date('1970-01-02')));

// parseInt(), returns a whole number. spaces are allowed(but only the first number is returned.)
// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));//spaces are allowed, but only first number will be returned.
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));

// console.log(parseFloat("-10"));
// console.log(parseFloat("-10.33"));
// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));//spaces are allowed, but only first number will be returned.
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log(Number.isSafeInteger(10));


// DATES
const d = new Date();
// console.log(d);
// console.log(Number(d));
// console.log(d.getTime());
// console.log(String(Date())); //convert dates to string.->"Mon Jun 24 2024 17:27:20 GMT+0530 (India Standard Time)"
// console.log(Date().toString());
// console.log(d.getFullYear());
// console.log(d.getMonth()); //0-11 way.
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let month = months[d.getMonth()];
// console.log(month);

// console.log(d.getDay()); // mon(1) =>1
// console.log(d.getTime()); //o/p ->1719231753575

// console.log(d.getDate());
// const dat = new Date("2024-06-24");
// console.log(dat.getDate()); //25
// console.log(dat.getMinutes());
// console.log(dat.getSeconds());
// console.log(dat.getMilliseconds());

// console.log(d.getHours());
// console.log(`${d.getHours()} : ${d.getMinutes()}`);
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// console.log(d.getDay());
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[d.getDay()]);

// const d2 = new Date('2024-06-24');
// const d2 = new Date();
// console.log(d2.getTime()); //returns milliseconds since jan1,1970

// console.log(d.getTimezoneOffset()); //returns difference (in minutes) b/w local an UTC time.

// JavaScript Bitwise Operators
//Bitwise operators work on 32 bit numbers.
// console.log(5 & 1); //& works on comparing each digit-> 0101 & 0001, here 1 matched both sides.
// console.log(5 | 1); //it is opposite of &
// console.log(~5); //~(Bitwise Not) -> inverts all bits 0101 to 1010 which is 6
// console.log(5 ^ 1);  //0101 ^ 0001 -> 0100
// console.log(5 << 1); //5x2 or we can say shift 1 bit to left 0101 to 1010 ->10 (Left shift by 1 bit: 0101 << 1 = 1010.)
// console.log(5 >> 1); //0101 -> 0010 which is 2 (Right shift by 1 bit: 0101 >> 1 = 0010.)
// console.log(5 >>> 1); //unsigned right shift (it behaves same as signed right shift).