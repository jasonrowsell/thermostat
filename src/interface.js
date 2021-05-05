document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  var temperature = document.querySelector(".temperature");

  temperature.innerHTML = thermostat._temp;
});
