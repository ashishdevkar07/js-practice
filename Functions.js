// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
function result(){
    console.log("Hello")
}
result();



// Local variables
// A variable declared inside a function is only visible inside that function.
function result(){
    let message = "Ashish Devkar";
    console.log(message);
}
result();
console.log(message) // <-- Error! The variable is local to the function



// Outer variables
// A function can access an outer variable as well, for example:
let name = "Ashish";
let age = 20;
function result(){
    console.log("Hello, " + name);
    console.log(`You are ${age} years old!`);
}
result();




// Function with Parameters 
// We can pass arbitrary data to functions using parameters.
function result(name , age , city){
    console.log(`Hello, Myslef ${name}, I am ${age} years old, I belong from ${city}...`);
}
result("Ashish" , 20 , "Sangli");




// Function Expression
let multiplication = function(a , b){
    return a * b ;
}
console.log(multiplication(4,5));


let greetings = function(name){
    console.log("Hello ," +name);
}
greetings("Ashish");



// Arrow Function 
// It is the Shortest way to write a function compare to others
let addition = (a , b) => a + b ;
console.log(addition(5,6));


let greet = () => console.log("Hello!");
greet();