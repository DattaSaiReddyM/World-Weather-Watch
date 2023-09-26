const submitBtn = document.getElementById("submit-btn");
const locationInput = document.getElementById("location");
const temperatureEl = document.getElementById("temperature");
const descriptionEl = document.getElementById("description");

function convertion(val){
    return (val - 273.15).toFixed(2) }

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const location = locationInput.value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3045dd712ffe6e702e3245525ac7fa38`)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      temperatureEl.innerHTML = `Temperature : ${convertion(temperature)}&#176;C`;
      descriptionEl.innerHTML = `Description : ${description}`;
    });
});
