const accountId = 144553; //value can't be changed.
let accountEmail = "test@google.com"; //Intentionally lock the value
var accountPassword = "12345"; // it is not prefered to use, because of issue in block & functional scope.
let accountState; // o/p gonna be 'undefined'.

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

// console.table([accountId, accountEmail, accountPassword, accountState]);
console.table([accountId, accountEmail, accountPassword, accountState]);
