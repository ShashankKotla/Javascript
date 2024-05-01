//Immediately Invoked Function Expressions (IIFE)
//To avoid the pollution from global scope(it can variable or any declaration.).
(function test1() { //named  IIFE => with func name
    console.log(`DB CONNECTED`);
})();

((name)=>{ // without func name
    console.log(`DB CONNECTED-2 ${name}`);
})('codeJs');

