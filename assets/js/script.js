var cities = []

var cityFormE1 = document.querySelector("#city-search-form");
var cityInputE1 = document.querySelector("#city");
var weatherContainerE1 = document.querySelector("#current-weather-container");
var citySearchInputE1 = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerE1 = document.querySelector("#week-container");
var previousSearchButtonE1 = document.querySelector("#previous-search-btn");

var formSubmitHandler = function(event){
    event.preventDefault();
    var city = cityInputE1.ariaValueMax.trim();
    if(city){
        getCityWeather(city);
        getWeek(city);
        cities.unshift({city});
        cityInputE1.value = "";
    } else{
        alert("Please enter a city");
    }
    saveSearch();
    pastSearch(city);
}

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};

var getCityWeather = function(city){
    var apiKey = "1efbe90938445ec45a8146fce795c02c"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};

 // previousSearch();
 
 cityFormEl.addEventListener("submit", formSumbitHandler);
 previousSearchButtonEl.addEventListener("click", previousSearchHandler);