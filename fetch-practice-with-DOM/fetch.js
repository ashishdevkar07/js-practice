async function getUser() {
    try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let data = await response.json()

    document.querySelector("#name").innerHTML = "Name: " + data.name
    document.querySelector("#email").innerHTML = "Email: " + data.email
    document.querySelector("#city").innerHTML = "City: " + data.address.city
    } catch(error){
        console.log("Something went wrong: " +error)
        document.querySelector("#name").innerHTML = "Failed to load data"
    }   
}

getUser() 