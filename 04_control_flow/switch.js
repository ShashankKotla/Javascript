//Note : It can be used in Redux.


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Non of them matched");
//         break;
// }

//Note: incase any case as matched then it prints all the code except default. so to stop unwanted result we use break.

const month = "march"

switch (month) {
    case "Jan":
        console.log(1);
        break;
    case "Feb":
        console.log(2);
        break;
    case "march":
        console.log(3);
        break;
    case 'april':
        console.log(4);
        break;

    default:
        console.log("Non of them matched");
        break;
}