document.addEventListener("DOMContentLoaded", () =>
{
  const updateTemperature() = () =>
  {
    thermostat._temperature
  }
  }

  const thermostat = new Thermostat();
  var temperature = document.querySelector(".temperature"),
    temperatureUp = document.getElementById("temperature-up"),
    temperatureDown = document.getElementById("temperature-down");

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
