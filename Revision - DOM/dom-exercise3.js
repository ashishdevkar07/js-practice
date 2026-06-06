let textarea = document.querySelector("#mytext")
let characterCount = document.querySelector("#count")
let remainingCharacter = document.querySelector("#remaining")

textarea.addEventListener("input" , function(){
    let count = textarea.value.length 
    let remaining = 150 - count

    characterCount.innerHTML = "Characters typed: " + count
    remainingCharacter.innerHTML = "Characters remaining: " + remaining

    if (remaining == 0){
        remainingCharacter.style.color = "red"
        remainingCharacter.innerHTML = "Limit Reached"
    }
})
