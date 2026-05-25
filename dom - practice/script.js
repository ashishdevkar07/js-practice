
// Part 1 — Control existing elements ✅ done
// Selecting, changing text, changing style, events, input value — you just did all of this.

// Example 1 :- 
// let title = document.querySelector("#title")
// let input = document.querySelector("#nameinput")
// let btn = document.querySelector("#btn")

// btn.addEventListener("click", function(){
//     let name = input.value
//     title.innerHTML = "My Name is " + name
// }) 



    //  Example 2 :- 
// let para = document.querySelector("#para")
// let input = document.querySelector("#name")
// let bton = document.querySelector("#bton")

// bton.addEventListener("click" , function(){
//     let yourname = input.value
//     para.innerHTML = "Welcome " + yourname +" !"

//     if (yourname === ""){
//         para.innerHTML = "Please type your name..."
//     } else {
//         para.innerHTML = "Welcome " + yourname + " !"
//     }
// })




// Part 2 — Create new elements dynamically
// Adding new things to the page that weren't there before — this is createElement and appendChild.

let bton = document.querySelector("#bton")
let input = document.querySelector("#newItem")
let list = document.querySelector("#list")

bton.addEventListener("click" , function(){
    let newtask = input.value

    if (newtask === ""){
        console.log("Please type a task first")
    } else {
        let newItem = document.createElement("li")
        newItem.innerHTML = newtask
        list.appendChild(newItem)
        input.value = ""
    }
}) 