function UpdateWeather(response){
    let temperature = document.querySelector("#weather-temperature")
    temperature.innerHTML=response.data.temperature.current.
    console.log(response.data.current.temperature.current);

}



function SearchCity (city) {
let apiKey = "4f430cb68t0bf0b27o781c38a281438d"
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
axios.get(apiUrl).then(UpdateWeather);
}

function Search(event){
    event.preventDefault();

    let searchInput = document.querySelector("#input-city");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= searchInput.value;
SearchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit" , Search);

