const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd483a3962msh36ea09e9e9ff871p151e49jsn4cfe095eda1c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })

    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
let city1 = ["dehradun", "tokyo", "patna", "london"];

function getMulticity() {
  
  const divName = document.getElementById("othercity");
 // divName.innerHTML = "";
  city1.forEach((e) => {
    // const para=document.createElement('p');
    // console.log(e);
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + e,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const row = document.createElement("tr");
        row.innerHTML = ` <th scope="row" class="text-start">${e}</th>
		<td>${response.cloud_pct}</td>
		<td>${response.temp}</td>
		<td>${response.feels_like}</td>
		<td>${response.humidity}</td>
		<td>${response.min_temp}</td>
		<td>${response.max_temp}</td>
		<td>${response.wind_speed}</td>
		<td>${response.wind_degrees}</td>
		<td>${response.sunrise}</td>
		<td>${response.sunset}</td>`;
        divName.appendChild(row);
      })

      .catch((err) => console.error(err));
  });
}

getMulticity();
