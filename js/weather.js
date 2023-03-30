const API_KEY = "7cbeb4eea886624bb4ce2e146835d98b";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const geolocationHandler = {
  onGeoOk: (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) =>
      response.json().then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} \u00b0C🌡`;
      })
    );
  },
  onGeoError: () => {
    alert("Can't find you. No weather for you.");
  },
};

navigator.geolocation.getCurrentPosition(
  geolocationHandler.onGeoOk,
  geolocationHandler.onGeoError
);
