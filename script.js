let weather = {
    "apiKey" : '3ed59388832cf8ae1cf101a538bb524e',
    fetchweather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { temp } = data.main;
        const { icon, description} = data.weather[0];
        const { humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`
        document.querySelector(".wind").innerText = `Wind Speed: ${speed} km/h`
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?nature/landscape/${name}')`
    }
}

var search = document.getElementById("search-bar");
var btn = document.getElementById("search-btn");

var searchCity = () => {
    weather.fetchweather(search.value);
    search.value = "";
}

btn.addEventListener("click",searchCity)
search.addEventListener('keypress',function(event){
    if(event.code === "Enter"){
        searchCity();
    }
})

weather.fetchweather("Delhi")