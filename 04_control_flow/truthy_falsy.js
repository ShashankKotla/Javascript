// const userEmail = "test@mail.com"

//assume truthy value or Falsy Value
//Falsy :- 0, false, -0, BigInt 0n, "", null, undefined, NaN
//truthy :- '0'-consist value, "false", " "-even space present it's a truthy, [], {}, function(){}, 

// if (userEmail) { // here we does not compared, it assume that it's a truthy value.
//     console.log("got user email");
// } else {
//     console.log("Don't have user email");
// }

const test = []
//we can check empty array

// if (test.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty.");
// }




//Nullish Coalescing Operator (??): null, Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //10
// val1 = undefined ?? 10 //10

//In below 35 & 36,37 cases the first value will be printed
// val1 = null ?? undefined // undefined
// val1 = undefined ?? null// null
// val1 =  null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
