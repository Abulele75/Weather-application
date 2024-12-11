

function Search(event){
    event.preventDefault();

    let searchInput = document.querySelector("#input-city");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= searchInput.value;

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit" , Search);

