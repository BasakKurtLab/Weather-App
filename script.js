
const url = 'https://api.openweathermap.org/data/2.5/'
const key = '3b8451fadfc8bbc4b50b546f2141e014'





const setApp = (e) => {
    if (e.keyCode == "13")
    
        getResult(search.value)
        
        
       
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=${lang.value}`
    fetch(query)
        .then(weather => {
            return weather.json()
        
        })
    .then(displayResult)
}

const displayResult = (result) => {

    console.log(result);
    let city = document.querySelector(".city")
    city.innerHTML = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.round(result.main.temp)}°C`
    
    let desc = document.querySelector(".desc")
    desc.innerHTML = `${result.weather[0].description}`
    
    let minmax = document.querySelector(".minmax")
    minmax.innerHTML=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}


const lang = document.getElementById("lang")
const search = document.getElementById("search")
search.addEventListener("keypress",setApp)