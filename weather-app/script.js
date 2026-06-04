let input = document.querySelector("#cityname")
let button = document.querySelector("#button")
let cities = document.querySelector("#city")
let temp = document.querySelector("#temp")
let Condition = document.querySelector("#Condition")

button.addEventListener("click", function() {
    let name = input.value
    if (name === ""){
       alert("Error , Please Enter City Name")
    } else {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=8143a1cbc32e66b9040665466896b5ae&units=metric"
     
    }

    
    async function getUser() { 
        try {
            let response = await fetch(url)
            let data = await response.json()

            cities.innerHTML = "City: " + data.name
            temp.innerHTML = "Temperature: " + data.main.temp + "°C"
            Condition.innerHTML = "Weather Condition: " + data.weather[0].description

        } catch (error) {
            console.log("Something went wronger " + error)
            cities.innerHTML = "Failed to load data"
        }
    }
    getUser() 
})

