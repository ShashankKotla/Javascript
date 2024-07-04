// A JS Function is a block of code designed to perform a particular task.
// It works when it is invoked (calls it).


function myFuntion(p1, p2) {
    return p1 * p2;
}
document.getElementById('func').innerHTML=myFuntion(3,2);

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}
document.getElementById('func').innerHTML= toCelsius(77);

