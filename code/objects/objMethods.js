/*JS Object Methods 
Object methods are actions that can be performed on objects.
A method is a function definition stored as a property value.
Property:-        Value:-
firstName	      John
fullName	     function() {return this.firstName + " " + this.lastName;}

In the example below, this refers to the person object:
this.firstName means the firstName property of person.
this.lastName means the lastName property of person.
*/


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    marks: 95,
    fullName: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

person.mark = function() {
    return ("Marks: " + this.marks).toLowerCase()
}

console.log(person.fullName());
console.log(person.mark());