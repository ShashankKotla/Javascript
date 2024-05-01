const name = "javascript";
const repoCount = 50;

// console.log(name + repoCount + " Values"); //Not prefered

// console.log(`Name is: ${name} & repoCount is: ${repoCount}`); // It is quite familar to Fstring in python & in JS it called as string-interpolation.



const gameName = new String("Javascript-Js-JS");

// console.log(gameName[0]); //index
// console.log(gameName.__proto__);  // empty object will be displayed {}.

// console.log(gameName.length); //provides length
// console.log(gameName.toUpperCase()); //converts upper case.
// console.log(gameName.charAt(2)); //Gives o/p -> character
// console.log(gameName.indexOf('s')); //gives index value.

const newString = gameName.substring(0,4); 
// console.log(newString);


const gameName2 = new String("Javascript");
const anotherString = gameName2.slice(-8, 4); //In slice,It supports -ve indexing
// console.log(anotherString);


const newStringOne = "     Javascript     ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); //removes space
// console.log(newStringOne.trimEnd()); //removes space-end
// console.log(newStringOne.trimStart()); //removes space-start


const url = "https://google.com/google%20cloud";

// console.log(url.replace('%20', '-')); //replace element
// console.log(url.includes('youtube')); //This method tells the element is present or not.


// console.log(gameName.split('-'));


const myTest = 'JAVASCRIPT';
// console.log(myTest.slice(-8,4)); 

// console.log(myTest.toLowerCase());
// console.log(myTest.toUpperCase());


// console.log(myTest.toLocaleUpperCase());
// note:toLocaleUpperCase() does not affect the value of the string itself. In most cases, this will produce the same result as toUpperCase() , but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.
// console.log(myTest.toLocaleLowerCase());


// console.log(myTest.startsWith('J'));
// console.log(myTest.endsWith('T'));

// const myTest2 = 'Javascript is dynamic programming language.'

// console.log(myTest2.lastIndexOf("language")); //34

// console.log(myTest.small()); //returns html element

// console.log(myTest2.search("is")); //Finds the first substring match in a regular expression search.

// console.log(myTest2.);

