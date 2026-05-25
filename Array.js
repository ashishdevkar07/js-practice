//let names = ["Ashish" , "Chaitanya" , "Rahul" , "Gururaj"]
// one way to print 
// for (let i in names){
//     console.log(names[i]);
// }

// another way 
// console.log(names)
// console.log(names.length)
// console.log(names.toString())
// console.log(names.join(" _ "))
// console.log(names.pop())
// console.log(names.push("Ashwin"))



// Map :- Creates a new array by performing some operation on each array element
let arr = [1,2,3,4,5]
let a = arr.map((value) => {
    console.log(value)
    return value + 10
})
console.log(a)

// Filter :- 
let a1 = arr.filter((ans) => {
    return ans < 3
})
console.log(a1)

// Reduce :- Reduces an array to a single value 
let a2 = arr.reduce((h1 , h2) => {
    return h1 + h2
})
console.log(a2)