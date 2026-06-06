let btn1 = document.querySelector("#button1")
let btn2 = document.querySelector("#button2")
let btn3 = document.querySelector("#button3")
let para = document.querySelector("#para")

btn1.addEventListener("click" , function(){
    document.body.style.backgroundColor = "red";
    para.innerHTML = "Colour Change to Red"
})

btn2.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    para.innerHTML = "Colour Change to Blue"
})

btn3.addEventListener("click" , function(){
    document.body.style.backgroundColor = "green";
    para.innerHTML = "Colour Change to Green"
})