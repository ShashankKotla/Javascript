marvel_heros = ["IronMan", "SpiderMan", "Thor"]
dc_heros = ["SuperMan", "BatMan", "flash"]

// marvel_heros.push(dc_heros) //Here push() takes whole array as an element.
// console.log(marvel_heros);

const total = marvel_heros.concat(dc_heros) //Here concat will only produce o/p by defining new variable
//note:-combines 2 arrays & returns new elements.
// console.log(total);

//Spread - spread all elements as they will become individual
const all_new_heros = [...marvel_heros, ...dc_heros] //we can mention no.of variables
// console.log(all_new_heros);

// console.log(Array.isArray('code')); //returns True or False
// console.log(Array.from("code")); //creates array - ['c', 'o', 'd', 'e']
// console.log(Array.from({name : "code"})); //invalid -[]

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); //returns new array from set of elements.

const test = [2, [0,9,7,8], 5, [4,5, [6,7]]]
console.log(test.flat(Infinity)); // removes the all nested array's make all elements to availiable in an single array.



