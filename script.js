const API_KEY = '331ca92302e15a439c9d10c2f72bc394';

async function getWeather(e) {
    e.preventDefault(); // Prevent form reload

    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const resultDiv = document.getElementById("weatherResult");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            resultDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🌥 Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p> `;
        } else {
            resultDiv.innerHTML = `<p style="color:red;">${data.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching data. Please try again.</p>`;
    }
};
