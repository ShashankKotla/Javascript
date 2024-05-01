//*********** Number ***************//

const score = 400;
// console.log(score);

const balance = new Number(100); // To define explicit
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(4)); //to set precision value. ex: 99.0000

// const otherNumber = 23.8966 //value will be 24
const otherNumber = 123.8966 //value will be 1.2e+2
// console.log(otherNumber.toPrecision(2));

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN')); // convert's to indian standarad values.

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


//*********Maths***********//
// Note: Maths library comes default in Javascript
// console.log(Math);
// console.log(Math.abs(-4)); //convert's sign of -ve value. "not +ve to -ve"
// console.log(Math.round(4.6)); //provides round of value - 5
// console.log(Math.ceil(4.6)); //provides top value - 5
// console.log(Math.floor(4.6)); //provides low value - 4
// console.log(Math.sqrt(25));
// console.log(Math.max(9,8,7,6,5));
// console.log(Math.min(9,8,7,6,5));


/*
1. Math.random()- provides value in b/w 0 & 1
2. Math.random()*10 +1 -> here value will be shifted.
3. (Math.floor(Math.random()) *10) + 1) => Here the "floor" makes the value to single lowest value & added with 1.
Note : In 3rd point, If Math-floor give 0, then it is added with +1 to avoid 0. Finial value will be 1 to 9(floor way).
4 . (Math.floor(Math.random()) * (max-min +1)) + min)
*/

const min =10;
const max = 20;
// console.log(Math.floor(Math.random() * (max-min +1)) + min);