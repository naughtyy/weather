const API_KEY = "1150d6860000487abc290058232908";
const input = document.querySelector("input");
const search = document.querySelector("button");
const weatherDiv = document.querySelector(".weather-city");
let cityName = "";
const getWeatherData = async () => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${input.value}&days=1&aqi=no&alerts=no`
  );
  const responseData = await response.json();

  return responseData;
};

search.addEventListener("click", () => {
  // Call the API and use its returned object in the JSX
  getWeatherData().then((weatherData) => {
    weatherDiv.innerHTML = "";
    weatherDiv.innerHTML = `<div class="mt-5 mx-auto text-center">
      <h2>${weatherData.location.name}</h2>
      <p>${weatherData.current.condition.text}</p>
      <h1>${weatherData.current.temp_c}°C</h1>
      <img src="${weatherData.current.condition.icon}" alt="" />
      <div class="row justify-content-center mt-3">
        <div class="col-2 border-end border-white">
          <p>humidity</p>
          <p>${weatherData.current.humidity}</p>
        </div>
        <div class="col-2">
          <p>Wind Speed</p>
          <p>${weatherData.current.wind_kph}</p>
        </div>
      </div>
      </div>`;
  });
});
