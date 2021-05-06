document.addEventListener("DOMContentLoaded", () => {
  var dateDayName = document.querySelector(".date-dayname"),
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysAbbreviated = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  (currentDate = new Date()),
    (currentCity = document.getElementById("current-city"));

  dateDayName.innerHTML = days[currentDate.getDay()];
  updateTemperature();

  function updateTemperature() {
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
  }
});
