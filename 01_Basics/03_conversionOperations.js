// let test = "33abc";
// let test = null;
// let test = undefined;
// let test = 33;
// let test = true;
// let test = "code"

// console.log(typeof(test));

// let valueConvert = String(test);
// console.log(typeof(valueConvert));
// console.log(valueConvert);

// let valueConvert2 = Boolean(test);
// console.log(typeof(valueConvert2))
// console.log(valueConvert2);
// test = "33"
// let valueConvert3 = Number(test);
// console.log(typeof(valueConvert3))
// console.log(valueConvert3);
// Here is an conversion example when you implemented in 18line, Number-conversion
//'33' => 33
//'33abd' => NaN
//true-1 & false-0

// let isLoggedIn = 1; //if '0' it will be false
// let isLoggedIn = ""; //If ""-emptystring it will be false & "code", if string contains data it will true. 
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


/* -------Operations------- */ 
// operators :- +. -, *, ** -(power), / , % -(for reminder)

// let value = 2;
// let negvalue = -value;
// console.log(negvalue);

// let str1 = "hello";
// let str2 = " code";
// console.log(str1 + str2);

// The below 4 line (43-47) are not prefered
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// The better way is to write
// console.log((1+3) * 5%3);

// console.log(true); //o/p will be true
// console.log(+true); // o/p will be 1
// console.log(true +); // o/p will be error
// console.log(+""); //o/p will be 0


// let gameCounter = 100;
// gameCounter++
// console.log(gameCounter)


/* -------Prefix&Postfix------- */
//The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment,
// depending on where the operator is placed.


let x = 3;
const y = x++; //Postfix
// console.log(x);
// console.log(y);
// console.log("x value: ", x ,"and y value is: ", y); //increment operator increments (x) and returns the value before incrementing.(y)

let x2 = 3;
const y2 = ++x2; //prefix
// console.log(y2);
// console.log("x value: ", x2 ,"and y value is: ", y2); //increment operator increments (x) and returns the value after incrementing.(y)




