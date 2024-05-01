/********Dates*********/
//Temporial API for Dates(Purposal)

// let myDate = new Date() // To define explicit
// console.log(myDate); //2024-02-22T10:07:42.214Z

// methods:-
// console.log(typeof myDate);
// console.log(myDate.toString()); //provides full info -> Thu Feb 22 2024 15:37:42 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2024-02-22T10:07:42.214
// console.log(myDate.toLocaleString()); //2/22/2024, 3:39:58 PM


// let myCreatedDate = new Date(2024, 1, 22) //Months starts from 0-jan
// let myCreatedDate = new Date(2024, 1, 22, 5, 3) // 2/22/2024, 5:03:00 AM
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("02-22-2024") // "MM-DD-YY"
// console.log(myCreatedDate.toLocaleString());

// Timestamp
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //To convert to seconds.

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1); //to provide accurate month
// console.log(newDate.getDay()); //day start from monday-1


//TimeZone example code.
newDate.toLocaleString('default', {
    weekday: "long"
})
