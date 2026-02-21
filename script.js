// 5cdf5c8e546c82497daa3d947c79747e
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=udaipur&appid=5cdf5c8e546c82497daa3d947c79747e
//q can be city name , city id , country code
//{"coord":{"lon":73.6918,"lat":24.5712},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":292.29,"feels_like":290.94,"temp_min":292.29,"temp_max":292.29,"pressure":1015,"humidity":26,"sea_level":1015,"grnd_level":941},"visibility":10000,"wind":{"speed":2.08,"deg":343,"gust":2.09},"clouds":{"all":0},"dt":1771180050,"sys":{"country":"IN","sunrise":1771119572,"sunset":1771160368},"timezone":19800,"id":1253986,"name":"Udaipur","cod":200}
//1234 = Sydney


const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("city-input")
const apiKey = "5cdf5c8e546c82497daa3d947c79747e"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`

hideResult()
searchBtn.addEventListener("click", searchWeather);
userInput.addEventListener("input", () => {
    hideError()
    hideResult()
})
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        searchWeather()
})
userInput.addEventListener("focus",()=>{userInput.select()})

async function searchWeather() {
    const cityName = document.getElementById("city-input").value
    const errorEl = document.querySelector(".error-msg");
    if (!cityName) {
        hideResult()
        showError("Please enter a city name.");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}&q=${cityName}`)
        console.log(response)
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found.Check city spelling.")
            } else {
                const msg = response.statusText ? response.statusText : "Something went wrong.Try again later."
                throw new Error(msg)
            }
        }
        const data = await response.json();
        console.dir(data)
        hideError()
        showResult(data)

    } catch (error) {
        showError(error.message)
    }
}

function showResult(data) {
    document.querySelector(".result").style.display = "block"
    document.querySelector(".humidity-val").textContent  = data.main.humidity + " %";
    document.querySelector(".wind-val").textContent  = data.wind.speed + " km/h";
    document.querySelector(".pressure-val").textContent  = data.main.pressure + "kPa";
    document.querySelector(".city-name").textContent  = data.name;
    document.querySelector(".temperature").textContent  = Math.round(data.main.temp) + " °C";
}
function hideResult() {
    document.querySelector(".result").style.display = "none"
}
function showError(message) {
    const errorEl = document.querySelector(".error-msg");
    errorEl.textContent = message;
    errorEl.classList.add("err-show", "text-shake");
    setTimeout(() => errorEl.classList.remove("text-shake"), 300);

}
function hideError() {
    const errorEl = document.querySelector(".error-msg");
    errorEl.classList.remove("err-show");

}

//what to do if error is shown but still city name is written in place of city
//what happens when first time page is loaded and it shows City Name. What is the ideal default look ?
// how to handle error toggling of hide/show and animate on/off
//how keyframe works ?
//how to handle enter key storke
//how to fix the error space
//success/error animations
//ask to co-pilot or claudio to review your code
//toast-style notifications
//show API error messages safely
//clearing error when typing
//api send statusText on failure like "not found" if city name is incorrect . "unauthorized" if API key is wrong . but how do we map this statusText with user friednly messages.
//better UX for invalid input
//Enter key support (keydown)
//show cached data on error , how ? do we need redis ?
//Loading spinner ⏳

//Disable button while fetching

//Change weather icon dynamically 🌦️
//dark mode support
//auto-suggest city names
//show retry logic
//detect rate limiting
//debounce API calls
//XSS attack