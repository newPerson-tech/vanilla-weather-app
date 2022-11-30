function displayTemperature(response){
console.log(response.data.main.temp);
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = Math.round(response.data.name);
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "5ed1e5439462ada1b6de58f11508c5d7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

console.log(response);
