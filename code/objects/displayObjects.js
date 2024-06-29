// Display JS Objects
// const person = {
//     name : "John",
//     age : 30,
//     city:  "New York"
// }

// document.getElementById('obj').innerHTML=person

// 1. Display by name, properties of an obj can be displayed as a string.
// document.getElementById('obj').innerHTML=person.name  + ' ' + person.age + ' ' + person.city;

// 2. Display by loop, properties can be collected in a loop.
// person.country = "United States";
// let text = '';
// for (let x in person) {
//     // console.log(x);
//     text += person[x] + " ";
// }

// console.log(text);
// document.getElementById('obj').innerHTML = text;


// Using "Object.values()", creats an array from the property values.
// const person = {
//     name : "John",
//     age : 30,
//     city:  "New York"
// }

// const myArray = Object.values(person);
// const myArray2 = Object.keys(person);
// document.getElementById('obj').innerHTML=myArray;

// Using Object.entries(), makes it simple to use objects in loops.
// const fruits = {
//     Banana:300, orange:200, Apples:500
// };
// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//     text += fruit + ': ' + value + "<br/>";
// }
// document.getElementById('obj').innerHTML=text;

// Using JSON.stringify(), can be converted to a string with JSON method.
// It inclued in JS and supported in all major browsers

const person = {
    name: 'john',
    age:30,
    city: "New York",
    country: "United States"
}

let myString = JSON.stringify(person);

document.getElementById('obj').innerHTML=myString;