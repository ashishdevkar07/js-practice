// Selecting elements from HTML
let input = document.querySelector("#newItem")
let bton = document.querySelector("#btn")
let list = document.querySelector("#addlist")
let counter = document.querySelector("#counter")

// Function to update task counter
function updatecounter(){
    let Totaltasks = list.querySelectorAll("li").length
    counter.innerHTML = "Total Tasks : " + Totaltasks
}

// Adding task when button is clicked
bton.addEventListener("click", function(){
    let newtask = input.value

    // Validation - empty input check
    if(newtask == ""){
        alert("Error, please type the task first")
    } else {
        // Creating new list item
        let newItem = document.createElement("li")
        newItem.innerHTML = newtask

        // Creating delete button for this task
        let deletebtn = document.createElement("button")
        deletebtn.innerHTML = "delete"

        // Removing task when delete is clicked
        deletebtn.addEventListener("click", function(){
            newItem.remove()
            updatecounter()
        })

        // Adding delete button inside task
        newItem.appendChild(deletebtn)

        // Adding task to the list
        list.appendChild(newItem)

        // Clearing input box
        input.value = ""

        // Updating counter
        updatecounter()
    }
})