async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let data = await response.json()

    console.log("Name : " + data.name)
    console.log("Email : " + data.email)
    console.log("City : " + data.address.city)
}

getUser()