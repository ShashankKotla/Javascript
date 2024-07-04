// String search methods

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf('locate');//returns first occurance

// let index = text.lastIndexOf('locate'); //returns last occurance

// let index = text.indexOf('locate', 22); //returns -1 if nothing is found.
// let index = text.lastIndexOf('locate', 15); //returns -1 if nothing is found.

/*
Note : difference b/w search() & indexOF() is, in indexOf can't take powerful  search values(regular expressions).In search(), it can't take 2nd parameter
 */

// console.log(text.search(/locate/)); 

/*
    1. match() Method ->  returns an array containing the results of matching a string against a string (or a regular expression).
    2. matchAll() method -> returns an iterator containing the results of matching a string against a string (or a regular expression).
 */

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/g));// we will 3 o/p 
// console.log(text.match(/ain/gi));// we will 4 o/p , becoz we made rgexp to global insensitive.

// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator =text.matchAll(/cats/gi);
// // console.log(Array.from(iterator));
// document.getElementById('demo').innerHTML=Array.from(iterator);

let text = "Hello world, welcome to the universe"; //includes true if str word is present in the specified value.
// document.getElementById("demo").innerHTML = text.includes("world");
// document.getElementById("demo").innerHTML = text.startsWith('Hello');
// document.getElementById("demo").innerHTML = text.endsWith('universe');

//Note: Both are case sensitive
// console.log(text.startsWith('world', 6)); 
// console.log(text.endsWith('world',11));

