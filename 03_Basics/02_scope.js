// let a = 10
// const b = 20
// var c = 30 //var doesn't allow the scope to how it should be performed.

var c = 300 //global variable or global scope.
if (true) {//local scope (Block)
    let a = 10 
    const b = 20
    var c = 30 //it will be printed even it is inside of the scope.
}

// console.log(a);
// console.log(b);
// console.log(c);


// Note: Values from the global scope can be accessed into the local scope,
// but values from the local scope cannot be accessed global (outside) of it.
function one() {
    const username = "Javascript" //this variable will become global to "function two()" & it is local to "function one()"
    function two() {
        const website = "youtube" ///this variable will become local to "function two()"
        // console.log(username); 
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "Code"
    if (username == "Code") {
        const website = " youtube"
        // console.log(username + website);
    }
    
}


//Interesting...

console.log(addOne(5)); // value will be 6
function addOne(num) {
    return num + 1
}
// addOne(5)

console.log(addTwo(5)); // error becoz funtion is been hold by an variable.
const addTwo = function(num) { 
    return num +2
}
// addTwo(5)
