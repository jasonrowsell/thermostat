document.addEventListener("DOMContentLoaded", () => {
  var temperature = document.querySelector(".temperature"),
    temperatureUp = document.getElementById("temperature-up"),
    temperatureDown = document.getElementById("temperature-down");

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

  // updates temperature reading

  function updateTemp() {
    temperature.innerHTML = thermostat._temperature;
  }
});
