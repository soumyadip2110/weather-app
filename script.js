let cityName = ''

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

document.getElementById('input-submit').addEventListener('click', () => {
    const cityName = document.getElementById('city-name').value
    if (cityName.trim().length > 0) {
        showWeather(cityName)
    }
})

// function showWeather(cityName){
//     const cityTemp = getData(cityName).then((temp) => {
//         return temp
//     })
//     alert(cityTemp)
// }

async function showWeather(cityName) {
    const data = await getData(cityName)
    // alert(temp)
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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    // let cityTemp;
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        // cityTemp = data.main.temp
        return data.main;
    } catch (error) {
        console.log('ERROR: ', error);
    }
    // return cityTemp
}

// function getData(cityName){
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
//     // let cityTemp;
//     return fetch(apiUrl)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         return data.main.temp
//     })
//     .catch((error) => {
//         console.log('ERROR: ', error);
//         return undefined;
//     })
// }
