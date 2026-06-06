
async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()

        let container = document.querySelector("#container")

        data.forEach(function (posts) {
            let card = document.createElement("div")
            card.innerHTML = "<h3>" + posts.title + "</h3>" + "<p>" + posts.body + "</p>"
            container.appendChild(card)
        });
    } catch (error) {
        console.log("Error,something went wrong" + error)
    }

}
getUser() 