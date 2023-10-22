



const search =()=>{
    const WeatherContainer = document.querySelector('.weather_container')
    const WeatherSearch = document.querySelector('.weather_btn')
    const WeatherBox = document.querySelector('.weather_box')
    const WeatherDeatils = document.querySelector('.weather_details')
    const error404 = document.querySelector('.not_found')
    const cityname = document.querySelector('.name')
    const APIKey = 'f2bf8ca0636aba5e7b0b2ce55bfa486b'
    const input = document.querySelector('.weather_input')


    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=${APIKey}`)
    .then((data) => data.json())
    .then(data => {
        console.log(data)

        if(data.cod == '404'){
            WeatherContainer.style.height = '400px'
            WeatherBox.classList.remove('active')
            WeatherDeatils.classList.remove('active')
            error404.classList.add('active')
            return;
        }

        WeatherContainer.style.height = '555px'
        WeatherBox.classList.add('active')
        WeatherDeatils.classList.add('active')
        error404.classList.remove('active')

        const img = document.querySelector('.img')
        const temperature = document.querySelector('.weather_temp')
        const discription = document.querySelector('.weather_disc')
        const humidity = document.querySelector('.humidity_info span')
        const wind = document.querySelector('.wind_info span')

        input.value = ''



        if(data.weather[0].main == 'Clear'){
            img.src = './img/clear.png'
        }else if(data.weather[0].main == 'Rain'){
            img.src = './img/rain.png'
        }else if(data.weather[0].main == 'Snow'){
            img.src = './img/snow.png'
        }else if(data.weather[0].main == 'Clouds'){
            img.src = './img/cloud.png'
        }else if(data.weather[0].main == 'Mist'){
            img.src = './img/mist.png'
        }else if(data.weather[0].main == 'Haze'){
            img.src = './img/mist.png'
        }


        temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span`
        cityname.innerHTML = data.name
        discription.innerHTML = data.weather[0].description
        humidity.innerHTML = `${data.main.humidity}%`
        wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`


    })
    .catch(error => console.log(error))

}