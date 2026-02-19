// 5cdf5c8e546c82497daa3d947c79747e
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=udaipur&appid=5cdf5c8e546c82497daa3d947c79747e

//{"coord":{"lon":73.6918,"lat":24.5712},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":292.29,"feels_like":290.94,"temp_min":292.29,"temp_max":292.29,"pressure":1015,"humidity":26,"sea_level":1015,"grnd_level":941},"visibility":10000,"wind":{"speed":2.08,"deg":343,"gust":2.09},"clouds":{"all":0},"dt":1771180050,"sys":{"country":"IN","sunrise":1771119572,"sunset":1771160368},"timezone":19800,"id":1253986,"name":"Udaipur","cod":200}



const searchBtn = document.getElementById("search-btn");
const apiKey = "5cdf5c8e546c82497daa3d947c79747e"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`

searchBtn.addEventListener("click", searchWeather);

async function searchWeather() {
    const cityName = document.getElementById("city-input").value
    const errorEl = document.querySelector(".error-msg");
    if (!cityName) {
        showError("Please enter a city name");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}&q=${cityName}`)
        console.log(response)
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found.Check city spelling.")
            } else {
                const msg = response.statusText?response.statusText:"Something went wrong.Try again later."
                throw new Error(msg)
            }
        }
        const data = await response.json();
        errorEl.classList.add("hideError")
        document.querySelector(".humidity-val").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind-val").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".pressure-val").innerHTML = data.main.pressure;
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°  C";
    } catch (error) {
        showError(error.message)
    }
}

function showError(message) {
    const errorEl = document.querySelector(".error-msg");
    errorEl.innerText = message;
    errorEl.classList.add("err-show", "text-shake");
    setTimeout(() => errorEl.classList.remove("text-shake"), 300);
}
function hideError() {
    const errorEl = document.querySelector(".error-msg");
    errorEl.classList.add("error", "error-msg.show");
}