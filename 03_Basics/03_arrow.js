//Note : the content which is inside of the scope, we can say as context(values which are stored in a variable).
const user = {
    username: 'code',
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to Website!`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'JsCode'
// user.welcomeMessage()
// console.log(this);

// function  test() {
//     // console.log(this); //In browser console, global object is window.(when we try 'this').
//     let username = "JS"
//     console.log(this.username); //undefined. work under objects not under functions.
// }
// test()

/*************** Arrow Functions *****************/
//() => {}
// const test = () => {
    
// }

// const test = () => {
//     let username = "JS"
//     console.log(this);
// }



// const addon = (num1 , num2) => {
//     return num1 + num2 //explicit return, writing return inside {}.
// }
// console.log(addon(4,5));

// Implicit return
// const addon = (num1, num2) => num1+ num2 //type one
// const addon = (num1, num2) => (num1+ num2) //type one
// console.log(addon(2,5));


//return object
// const username = (num1, num2) => ({username : 'CODE'})

// console.log(username());


