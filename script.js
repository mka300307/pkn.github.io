window.addEventListener("scroll", function (){
    var navbar = document.querySelector("#navbar");
    navbar.classList.toggle("sticky",window.scrollY>500);
})

const dateElement = document.getElementById("date");
const currentDate = new Date();

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year}`;

dateElement.textContent = formattedDate;


const tempratureElementText = document.getElementById("suhu");
const tempratureElementIcon = document.getElementById("temp");

function getWeatherInfo() {
    const now = new Date();
    const hours = now.getHours();
    let weatherInfo;

    let localTime =now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    if (hours >= 1 && hours <= 5) {
        weatherInfo = {
            temperature: localTime + " | 25°C",
            icon: '<i class="fa-solid fa-temperature-quarter"></i>'
        };
    } else if (hours >= 6 && hours <= 10) {
        weatherInfo = {
            temperature: localTime + " | 28°C",
            icon: '<i class="fa-solid fa-temperature-half"></i>'
        };
    } else if (hours >= 11 && hours <= 15) {
        weatherInfo = {
            temperature: localTime + " | 32°C",
            icon: '<i class="fa-solid fa-temperature-three-quarters"></i>'
        };
    } else if (hours >= 16 && hours <= 18) {
        weatherInfo = {
            temperature: localTime + " | 32°C",
            icon: '<i class="fa-solid fa-temperature-three-quarters"></i>'
        };
    } else {
        weatherInfo = {
            temperature: localTime + " | 25°C",
            icon: '<i class="fa-solid fa-temperature-quarter"></i>'
        };
    }

    return weatherInfo;
}

const weatherInfo = getWeatherInfo();
tempratureElementText.textContent = weatherInfo.temperature;

tempratureElementIcon.innerHTML = weatherInfo.icon;

document.addEventListener("DOMContentLoaded", function() {
    const slideElement = document.querySelector(".title");
    slideElement.style.animation = "none"; // Disable the animation

    setTimeout(function() {
        slideElement.style.animation = "slideAnimation 2s ease-in-out , slideAnimation 2s ease-out-in forwards"; // Re-enable the animation
        // Re-enable the animation
    }, 0);
});




