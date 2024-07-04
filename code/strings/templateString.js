/* String Templates, Template strings, Template Literals are one other the same and they use back-ticks (` `) than they define a string */

// let text = `Hello "world"!`;

// Multi-line Strings => allow multi-line strings
// let text = 
// `
//     Tom
//     &
//     jerry
// `
// console.log(text);
// document.getElementById('demo').innerHTML=text;

/* 
    Interpolation:- (string interpolation)
    Template String provide an easy way to interpolate variables and expressions into strings. ${...}
    " Automatic replacing of variables with real values is called string interpolation." (similar to python f-string)
*/
// let person1 = 'John';
// let person2 = 'Wick';

// console.log(`FullName: ${person1} ${person2}`);


// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);

// let header = "Template Strings";
// let tags = ['template strings', 'javascript', 'es6'];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//     html += `<li>${x}</li>`;
// }
// html +=`</ul>`;
// document.getElementById('demo').innerHTML=html;