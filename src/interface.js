document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  var temperature = document.querySelector(".temperature"),
    temperatureUp = document.getElementById("temperature-up"),
    temperatureDown = document.getElementById("temperature-down");

  temperature.innerHTML = thermostat._temp;

  temperatureUp.addEventListener("click", () => {
    thermostat.up();
    temperature.innerHTML = thermostat._temp;
  });

  temperatureDown.addEventListener("click", () => {
    thermostat.down();
    temperature.innerHTML = thermostat._temp;
  });
});
