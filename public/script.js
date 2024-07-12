document.getElementById('input-submit').addEventListener('click', () => {
    const cityName = document.getElementById('city-name').value
    if (cityName.trim().length > 0) {
        showWeather(cityName)
    }
})

async function showWeather(cityName) {
    const data = await getData(cityName)
    const resultContainer = document.querySelector('.result-container')
    resultContainer.innerHTML = ''

    const temp = document.createTextNode(`Temperature in ${cityName}: ${data && data.temp ? (data.temp + '*C') : 'not available'}`)
    const feelsLikeTemp = document.createTextNode(`Feels like: ${data && data.feels_like ? (data.feels_like + '*C') : 'not available'}`)

    const br = document.createElement("br");

    resultContainer.appendChild(temp)
    resultContainer.appendChild(br);
    resultContainer.appendChild(feelsLikeTemp)
}

async function getData(cityName) {
    try {
        const response = await fetch('/api/config')
        const data = await response.json()
        const apiKey = data.apiKey
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        const weatherResponse = await fetch(apiUrl)
        const weatherData = await weatherResponse.json()
        return weatherData.main;
    } catch (error) {
        console.log('ERROR: ', error);
    }
}
