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