const API_KEY = '46ad7457603b9b0104e633e78cd60e16';
const searchWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
document.getElementById('btn-search').addEventListener('click', () =>{
    const inputValue = document.getElementById('input-field').value;
    searchWeather(inputValue);
});
const displayWeather = (weather) => {
    setInnerText('temperature', weather.main.temp)
    setInnerText('city', weather.name )
    setInnerText('condition', weather.weather[0].main)
}
searchWeather('Dhaka')