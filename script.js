const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric'

document.getElementById('input-submit').addEventListener('click', () => {
    const cityName = document.getElementById('city-name').value
    // console.log(cityName);
    showWeather(cityName)
})

function showWeather(cityName){
    getData(cityName)
}

function getData(cityName){
    // 
}
