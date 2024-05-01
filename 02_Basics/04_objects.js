//singleton object => new Object()
//non-singleton object => {}, example: const test = {}

const user = {}

user.id = "123abc";
user.name = "sammy";
user.isLoggedIn = false;

// console.log(user);

const user2 = {
    email: "test@email.com",
    fullName: {
        userFullName : {
            firstName : "test",
            lastName: "Te"
        }
    }
}

// console.log(user2.fullName.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2) // {}-Target & obj are source, all data goes into target.
// console.log(obj3);

const obj4 = {...obj1, ...obj2} //spread
// console.log(obj4);


//When data comes from DB, then they are in array-object format

const user = [
    {
        id:1,
        email:"test1@gmail.com"
    },
    {
        id:2,
        email:"test2@gmail.com"
    },
    {
        id:3,
        email:"test3@gmail.com"
    }
]
// console.log(user3[0].email);

// console.log(user);
// console.log(Object.keys(user)); //o/p will be array(DT) format.
// console.log(Object.values(user)); //o/p will be array(DT) format.
// console.log(Object.entries(user)); //o/p will be array(DT) format.
// console.log(user.hasOwnProperty('name'));



/*-------De-structure & JSON API------------*/


//De-structure can be done in arrays & objects to get value from it.

//De-structure
const course = {
    courseName : "JS",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor: Instructor} = course

console.log(Instructor);

//API - In Simple words we can discribe, a person doing our work and takes burden.
//JSON is a format used to write values in the backend when making API calls.

//sample below:
// {
//     "name" : "code",
//     "CourseName" : "JS",
//     "coursePrice" : 99
// }

[
    {},
    {},
]//Array format JSON.
//Random-userme Api -Json Data & Json format-for reading Json data.