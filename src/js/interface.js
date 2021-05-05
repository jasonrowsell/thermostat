document.addEventListener("DOMContentLoaded", () => {
  var temperature = document.querySelector(".temperature"),
    currentTemperature = document.getElementById("current-temperature"),
    currentCity = document.getElementById("current-city"),
    temperatureUp = document.getElementById("temperature-up"),
    temperatureDown = document.getElementById("temperature-down"),
    temperatureReset = document.getElementById("temperature-reset"),
    powerSavingMode = document.getElementById("psm"),
    powerSavingModeOn = document.getElementById("psm-on"),
    powerSavingModeOff = document.getElementById("psm-off");

  const thermostat = new Thermostat();
  updateTemp();

  temperatureUp.addEventListener("click", () => {
    thermostat.up();
    updateTemp();
  });

  temperatureDown.addEventListener("click", () => {
    thermostat.down();
    updateTemp();
  });

  temperatureReset.addEventListener("click", () => {
    thermostat.reset();
    updateTemp();
  });

  powerSavingModeOn.addEventListener("click", () => {
    thermostat.switchPowerSavingModeOn();
    updateTemp();
    powerSavingMode.innerHTML = "On";
  });

  powerSavingModeOff.addEventListener("click", () => {
    thermostat.switchPowerSavingModeOff();
    powerSavingMode.innerHTML = "Off";
  });

  // updates temperature reading

  function updateTemp() {
    temperature.innerHTML = thermostat._temperature;
    temperature.className = thermostat.usage();
  }

  currentCity.addEventListener("change", (event) => {
    const city = event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        currentTemperature.innerHTML = data.main.temp;
      });
  });
});
