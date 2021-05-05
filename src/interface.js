document.addEventListener("DOMContentLoaded", () => {
  var temperature = document.querySelector(".temperature"),
    temperatureUp = document.getElementById("temperature-up"),
    temperatureDown = document.getElementById("temperature-down");

  const thermostat = new Thermostat();
  temperature.innerHTML = thermostat._temperature;

  temperatureUp.addEventListener("click", () => {
    thermostat.up();
    temperature.innerHTML = thermostat._temperature;
  });

  temperatureDown.addEventListener("click", () => {
    thermostat.down();
    temperature.innerHTML = thermostat._temperature;
  });
});
