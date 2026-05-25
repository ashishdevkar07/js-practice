// A value in JavaScript is always of a certain type. For example, a string or a number.
// There are eight basic data types in JavaScript.


// Number
// The number type represents both integer and floating point numbers.
let num = 1234;
console.log(num)
let n = 12.34;
console.log(n)


// String
//A string in JavaScript must be surrounded by quotes.
let str = "Ashish";
let str2 = "Sangli";

// There are three ways to write output :
console.log("Hello, " + str)
console.log('Hello' , +str)
console.log(`Hello ${str}!`)

// Boolean 
//The boolean type has only two values: true and false.
let namewritten = true; // yes, the name is written
let agewritten = false; // no, the age is not written



// null 
//The special null value does not belong to any of the types described above.
let age = null;



// The “undefined” value
//The special value undefined also stands apart. It makes a type of its own, just like null.
//The meaning of undefined is “value is not assigned”.

let age ; // here only variable is declared and value is not given which means it is undefined

let age = 200;
// here we change the value to undefined
age = undefined;


// The typeof operator
//The typeof operator returns the type of the operand. 
// It’s useful when we want to process values of different types differently or just want to do a quick check.

let name = "Ashish";
console.log(typeof(name));

let age = 20;
console.log(typeof(age));

let weight = true ;
console.log(typeof(weight));