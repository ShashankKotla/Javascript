//for-of loop -> array specific loop.

// const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(greet);
// }


const map = new Map()
map.set('IN','INDIA')
map.set('USA', 'United States Of America')
map.set("Fr", "France")
map.set('IN','INDIA')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myobj = {
//     game1 : "NFS",
//     game2 : "SpiderMan"
// }
// for (const [key, value] of myobj) {
//     console.log(key, value);
// }

// Note: for objects we use for-in & for arrays we use for-of