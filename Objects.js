// An object can be created with curly braces {…} with an optional list of properties. 
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

let student_records = {
    "name" : "Ashish",
    "age" : 20,
    "Education" : "BCA Degree",
    "Gender" : "Male"
}

// Both are same but syntax difference 
console.log(student_records.name);
console.log(student_records["name"])


delete student_records.Gender;
// here after removing gender the output will be undefined 
console.log(student_records.Gender); 

// calling every key value pairs at once using for loop
for (let key in student_records){
    console.log(key , ": " , student_records[key]);
}



// Object references and copying
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
let message = "Hello"
let word = message 
// it  creates two different vairables and in each vairable there is one value called "Hello"



// Example in object :- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = {
    name : "Ashish"
}

let admin = user 
admin.name = "Ashish Devkar"
console.log(user.name);




// Cloning and merging, Object.assign
let user = {
    "name" : "Ashish",
    "age" : 20
}

let clone = {}  // new object empty
for (let key in user){  // copied all the key values from user to clone
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
// if we change the data in it then it will not affext to original that is user becuase it had copied to user
clone.name = "Her"
console.log(user.name) // the output will be "Ashish"
console.log(clone.name) // here the output will be "Her"
