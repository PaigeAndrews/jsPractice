// change everything below to the newer Javascript!

// let + const
var a = 'test'; let
var b = true; const
var c = 789; const
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
 const okObj = { a, b, c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
var message = `Hello ${firstName} have I met you before?`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
const isValidAge = (age = 10) => age;
// Symbol
// Create a symbol: "This is my first Symbol"
Symbol('foo')
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
const whereAmI = (username, location) =>