function UpdateWeather(response){
    let temperature = document.querySelector("#weather-temperature");
    
    let temperatureElement=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= response.data.city;
   temperature.innerHTML = Math.round(temperatureElement);
}



function SearchCity (city) {
let apiKey = "4f430cb68t0bf0b27o781c38a281438d"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(UpdateWeather);
}

function Search(event){
    event.preventDefault();

    let searchInput = document.querySelector("#input-city");

SearchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit" , Search);

SearchCity("Durban");
