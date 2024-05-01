// comparisions : ===, !==, <, >, ==, !=, <=, >=

// if (2 !== "2") {
//     console.log("executed");
// }


// const isUserloggedIn = true
// const temperature = 41

// if (temperature < 50) {
//     console.log("Less than 50");
// }else{
//     console.log("greater than 50");
// }


// const score = 200;

// if (score > 100) {
//     // var power = "fly"; // var is a global, value can be accessed which it is inside the code (Not Recomended)
//     let power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //error


//short-hand notation
// const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope.(not recomended).
// if (balance > 500) console.log("test"),console.log("test2"); // implicit scope.(not recomended).

// const balance = 1000

// if (balance < 500) {
//     console.log("Less than 500");   
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900){
//     console.log("Less than 900");
// }else {
//     console.log("Less than 1200");
// }


const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userloggedIn && debitCard && 2==3) {
//     console.log("Allowed to buy course");
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}
