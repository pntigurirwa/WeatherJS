// Initialize storage

const storage = new Storage();
// Get storage location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e)
    => {
    const city = document.getElementById('city').nodeValue;
    const state = document.getElementById('state').nodeValue;

    // Change Location 
    weather.changeLocation(city, state);

    // Change Location in Local storage
    storage.setLocationData(city, state); 
    // Get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
    });



function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
