const apiKey = '075d8f15ad943e5bbba538fa04002e5b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

const card = document.querySelector('.card')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404 || response.status == 400 && city){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else if(!city){
        searchBox.classList.add('not-found');
        setTimeout(()=>{
            searchBox.classList.remove('not-found');
        },1000)
    }
    else{
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';
        document.querySelector('.sunrise').innerHTML = hourConvertissor(data.sys.sunrise) + ' / ' + hourConvertissor(data.sys.sunset)

        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'weather-icons/clouds.png';
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'weather-icons/clear.png';
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'weather-icons/rain.png';
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'weather-icons/drizzle.png';
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'weather-icons/mist.png';
        }

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
window.addEventListener('keyup', (keyPressed)=>{
    if (keyPressed.keyCode === 13) {
        
        checkWeather(searchBox.value);
    }
})

function hourConvertissor(unix){
    const hours = Math.floor((unix % 86400)/3600);
    const minutes = Math.floor(((unix % 86400)%3600)/60);
    const secondes = ((unix % 86400)%3600)%60;
    return hours+':'+minutes+':'+secondes;
}