/*
    TEMPLATE STRING
    -Introduced with ES6
    -Templates are strings enclosed in backticks(`This is a template string`).
    -Templates allow single & double quotes inside a string.
 */

// let text = `He's often called "John"`;
// let text = "He's often called \"John\"."; //beckspace escape characters.
/*
    \f	Form Feed
    \n	New Line
    \r	Carriage Return
    \t	Horizontal Tabulator
    \v	Vertical Tabulator
 */

// document.getElementById('demo').innerHTML=`text: ${text}`;

// document.getElementById('demo').innerHTML="Hola" +  "Shinchan!"; //Breaking long lines

/* Note: Don't create strings objects.
    The new keywoed complicates the code & slows down execution speed.
    String Objects Can produce unexpected results.
    comparing two JS objects always returns false
 */
// let x = new String("John Wick");
// let y = new String("John Wick");
// document.getElementById('demo').innerHTML=(x===y);

// let fName = "Shinchan";

// document.getElementById('demo').innerHTML=(name.length);

/*
Extracting String Characters(4 methods)
1. at(position) method
2. charAt(position) method
3. charCodeAt(position) method
4. [] -> array's.
 */

// let value = fName.charAt(1); //s, returns empty str if no character is found.
// let value = fName.at(0); //s, "at() is new addon to JS and it allows -ve indexs""
// let value = fName.charCodeAt(0); // returns UTF-16code (an int b/w 0 & 65535)
// let value = fName[7]


/*
    Extracting String Parts(3 methods)
    slice(start, end) -> extracts a part of string & returns extracted part in a new string.(end not included).
    substring(start, end) -> 
    substr(start, length)
 */

// let value = fName.slice(4,-1);
// let value = fName.substring(1,5); //considers less than 0 are treadted as 0 in substring.
// let value = fName.substr(0, 9) //2nd parameter is lenghth, here we can get full value.

/*
    In substr()&substring(), will slice out the rest of the string if we omit 2nd parameter.
 */

// let value = fName
// let value2 = '    Nohara     '
// document.getElementById('demo').innerHTML=value2.trim();
// console.log(value2.trim());

/*
    JS string padding - supports padding at the beginning and end of the string
    padStart(), method pads a string from the start.
    padEnd(), method pads a string from the end
 */
// 
// let text = '5';
// let pad = text.padStart(4, '0');
// let pad = text.padEnd(4, '0');
// console.log(pad);
// console.log(text.repeat(4)); //returns multiple copies.
// console.log(text.replace('5','6')); //  replaces only the first match & it is case sensitive. 

// to make replace case insensitive, use regular expressions with an /i flag( insensitive).
// let fName = 'Shinchan';
// let newText = fName.replace(/SHINCHAN/i, 'Shinchan Nohara!');
/*
    '/i' flag(insensitive)
    '/g' flag(global match)
 */

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// newText = text.replaceAll('Cats', 'Dogs');
// newText = text.replaceAll('cats', 'dogs');
//using replaceAll with regular expression
// newText = text.replaceAll(/cats/g, "dogs");
// newText = text.replaceAll(/Cats/g, "Dogs");


let text = "a b c d e f";
const myArray = text.split("");
// document.getElementById("demo").innerHTML = myArray[4].;

// console.log(myArray);




