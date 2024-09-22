const API_KEY = '4d0fee9539e02322b7161db27a699838'

async function fetchWeather() {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=92507,US&appid=${API_KEY}`);
    if(!response.ok) {
      alert(error);
    }
    const data = await response.json();

    let name = data.name;
    let lon = data.lon
    let lat = data.lat

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    const data2 = await response2.json();

    navCurrWeatherLink = document.getElementById("navCurrWeatherLink");

    navCurrWeatherLink.innerHTML = `${name} Weather: ${data2.weather[0].main}`;

  } catch(error) {
    console.error(error)
  }
}

fetchWeather();


