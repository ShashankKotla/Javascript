/* 
Functions :- In simple words, write once & call any where.(It just a package of code line)
syntax :-
function nameOfTheFunction(params) {
    //scope
    return //It just return the value, but it will not print
    console.log()// we can define this inside the function or outside the function
}
nameOfTheFunction()//Here nameOfTheFunction, is a reference & ()- is an execute.
console.log()
*/

function fullName(firstName, lastName) {
    return firstName + lastName
}
// console.log(fullName('Js', 'code'));

function calculate(num1 , num2){
    return `${num1} + ${num2} = ${num1 +num2}`
}
// console.log(calculate(5,4));


//Default value 
function employee(eName = 'NaN') {
    return eName
}

// console.log(employee('Javascript'));

function userName(user) {
    if (user === undefined) {
        console.log("Enter a valid user name");
        return
    }
    return  `${userName} just logged in`
}
function userName(user) {
    if (!user) { // it quite similar to (user === undefined)
        console.log("Enter a valid user name");
        return
    }
    return  `${userName} just logged in`
}

// console.log(userName()); //undefined



function cartValue(...itemValue) { 
    //Note: Spread & rust (operator) one other the same. It's name is defined based the usage.
    return itemValue
}
// console.log(cartValue(100, 200, 300));

//object way
const login = {
    email: "code@gmail.com",
    password: 9999
}

function loggedIn(anyobj) {
    return anyobj
}

// 2ways, either by passing a pre-declared object (login) or by directly providing object values within the function call.
// console.log(loggedIn(login)); //
// console.log(loggedIn({
//     email:"test@mail.com",
//     price : 20
// })); 


//Array Way

const arrValues = [100, 200, 500, 700, 900]

function returnValue(getArray) {
    return getArray[1]
}

// console.log(returnValue(arrValues));
// console.log(returnValue([100, 200, 500, 700, 900]));


