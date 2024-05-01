/********* Array's ********/

/*
In JavaScript, an array is called an object because it is a type of object. 
Objects in JavaScript are collections of key-value pairs, and arrays are a specific kind of object 
where the keys are automatically assigned as numerical indices starting from 0. This allows arrays to store
and organize data in an ordered manner. So, even though arrays have special behaviors for handling ordered lists 
of values, they are essentially objects with some additional functionality tailored for indexing and iteration.

*/

/*
1. JS array-copy operations create shallow copies (Heap)
//Deep-copy - stack
2. It can be written in []-square brackets, including different DT values 
*/

const arry = [0, 1, 2, 3, 4, 5]
// console.log(arry); 
// console.log(arry[1]);

const arry2 = new Array(1,2,3,4) //Explict define
// console.log(arry2);

// methods

// arry.push(6)
// console.log(arry);
// arry.pop()
// console.log(arry);

// arry.unshift(9) //added elements at start
// console.log(arry);
// arry.shift() //removes element at start
// console.log(arry);


const newArry = arry.join() //actually it converts elements in to string..
// console.log(newArry);

// note :- Diff of slice & splice, slice-original elements doesn't changed and splice-Original elements will be changed.
// console.log("A ", arry);

// const myn1 = arry.slice(1,3)
// console.log(myn1); //[1,2]

// console.log("B ", arry);

// const myn2 = arry.splice(1,3) //remove elements
// console.log(myn2);

// console.log("c ", arry);


//quest-methods ;-
// console.log(arry.includes(6)); //returns true or false
// console.log(arry.indexOf(4)); //provides index value


const test = new Array("shashank", 25, 8.0, null, true);
console.log(test);
console.log(test[4]);