document
  .getElementById("get-weather-btn")
  .addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    const apiKey = "1231fc7b38395d814f6f2dac344892fd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("city-name").innerText = data.name;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById(
          "description"
        ).innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById(
          "humidity"
        ).innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById(
          "wind-speed"
        ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
        const iconCode = data.weather[0].icon;
        document.getElementById(
          "weather-icon"
        ).src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-result").classList.remove("hidden");
        document.getElementById("weather-result").classList.add("visible");
      })
      .catch((error) => {
        alert("City not found! Please try again.");
        console.error("Error fetching weather data:", error);
      });
  });
