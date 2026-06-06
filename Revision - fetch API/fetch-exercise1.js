let button = document.querySelector("#btn")

button.addEventListener("click", function() {
    async function getUser() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
            let data = await response.json()

            document.querySelector("#userId").innerHTML = "User ID: " + data.userId
            document.querySelector("#title").innerHTML = "Post title: " + data.title
            document.querySelector("#body").innerHTML = "Post body: " + data.body
        } catch (error) {
            console.log("Something went wrong" + error)
            document.querySelector("#userId").innerHTML = "Error, Something Went wrong"
        }
    }
    getUser()
})
