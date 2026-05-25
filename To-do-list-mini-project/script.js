let input = document.querySelector("#newItem")
let bton = document.querySelector("#btn")
let list = document.querySelector("#addlist")
let counter = document.querySelector("#counter")

function updatecounter(){
            let Totaltasks = list.querySelectorAll("li").length
            counter.innerHTML = "Total Tasks : " +Totaltasks
        }

bton.addEventListener("click" , function(){
    let newtask = input.value

    if (newtask == ""){
        alert("Error, please type the task first");
    } else {
        let newItem = document.createElement("li")
        newItem.innerHTML = newtask
        list.appendChild(newItem)
        input.value = ""

       updatecounter()
        
        let deletebtn = document.createElement("button")
        deletebtn.innerHTML = "delete"

        deletebtn.addEventListener("click" , function(){
            newItem.remove()
            updatecounter()
        })

        newItem.appendChild(deletebtn)

        list.appendChild(newItem)

        input.value = ""

        
    }
})

