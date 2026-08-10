
// Q. Create a CLI weather app using OpenWeatherMap API that displays temperature & description for a city.



const axios = require("axios");

const city = process.argv[2];
const API_KEY = "YOUR_API_KEY_HERE"; // real key nahi ho to bhi chalega

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
    .then(res => {
        console.log("Temperature:", res.data.main.temp);
        console.log("Weather:", res.data.weather[0].description);
    })
    .catch(() => console.log("City not found"));


//     Sample Output
//     node weather.js Mumbai
// Temperature: 30
// Weather: clear sky
