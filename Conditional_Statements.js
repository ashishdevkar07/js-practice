//Sometimes, we need to perform different actions based on different conditions.

//To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

let age = 20 ;
if (age >= 18){
    console.log("You are ELigible for the voting...")
} else {
    console.log("You are not Eligible for the voting...")
}


let year = 2024;
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("It is leap year...");
}
else {
    console.log("It is not leap year...");
}


//Conditional operator ‘?’

// Syntax : let result = condition ? value1 : value2;

let result = (age > 18) ? console.log("You are Eligible for voting") : console.log("You are not eligible");
