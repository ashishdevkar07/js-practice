let input = document.querySelector("#name")
let btn = document.querySelector("#btn")
let para = document.querySelector("#para")

btn.addEventListener("click", function(){
    let task = input.value 
    if (task === ""){
        alert("Error, please enter your name...")
    } else {
        para.innerHTML = "Hello " + task + "! Welcome to my page" 
    }
})  