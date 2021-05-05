document.addEventListener("DOMContentLoaded", () => {
  var temperature = document.querySelector(".temperature"),
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
    if (thermostat.usage() === "low-usage") {
      temperature.style.color = "green";
    } else if (thermostat.usage() === "high-usage") {
      temperature.style.color = "red";
    } else {
      temperature.style.color = "";
    }
  }
});
