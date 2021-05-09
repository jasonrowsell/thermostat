document.addEventListener("DOMContentLoaded", () => {
  var temperature = document.querySelector(".temperature"),
    innerTemperature = document.querySelector(".ext"),
    temperatureUp = document.querySelector(".plus-btn"),
    temperatureDown = document.querySelector(".minus-btn"),
    temperatureColour1 = document.querySelector(".fill1"),
    temperatureColour2 = document.querySelector(".fill2"),
    temperatureReset = document.querySelector(".reset-button"),
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
    temperature.innerText = thermostat._temperature;
    innerTemperature.innerText = thermostat._temperature;
    if (thermostat.usage() === "low-usage") {
      temperatureColour1.style.background =
        "-webkit-linear-gradient(top, #24ad1f 40%, #c0f011 100%)";
      temperatureColour2.style.background =
        "-webkit-linear-gradient(top, #24ad1f 40%, #c0f011 100%)";
    } else if (thermostat.usage() === "medium-usage") {
      temperatureColour1.style.background =
        "-webkit-linear-gradient(top, #ff4900 20%, #ff4900 100%)";
      temperatureColour2.style.background =
        "-webkit-linear-gradient(top, #ff4900 20%, #ff4900 100%)";
    } else {
      temperatureColour1.style.background =
        "-webkit-linear-gradient(top, #ff1100 20%, #ec1d0e 100%)";
      temperatureColour2.style.background =
        "-webkit-linear-gradient(top, #ff1100 20%, #ec1d0e 100%)";
    }
  }
});
