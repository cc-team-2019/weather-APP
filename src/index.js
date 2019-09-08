// import './css/style.css';
import './js/search.js';

const axios = require('axios');
const API_KEY = '76d4597073b97b1d63fb3d8ec724ef57';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;
// latittude
let lat; 
//longitude
let long;



// // Geolokalizacja
     if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition(async position => {
             lat = (position.coords.latitude);
             long = (position.coords.longitude);
             
//wyciągnięcie danych z API
          
         
 });
 /// wyłapanie braku geolokalizacji
     } else {
         console.log('geolocation not available');
     }

//Event Listnenery
     var button1 = document.getElementById("showWeather").addEventListener('click', buttonClick);

     function buttonClick(){
         document.querySelector('.chooseCity').style.display= 'none';
         document.querySelector('.weatherPresentation').style.position= 'fixed';
     }
     
     var button2 = document.getElementById("weatherHourTitle").addEventListener('click', button2Click);
     function button2Click(){
         document.querySelector('.weatherPresentation').style.position='relative';
         document.querySelector('.weatherWeek section').style.display='none';
         document.querySelector('.weatherHour section').style.display='grid';
     }
     
     var button3 = document.getElementById("weatherWeekTitle").addEventListener('click', button3Click);
     function button3Click(){
         document.querySelector('.weatherPresentation').style.position='relative';
         document.querySelector('.weatherWeek section').style.display='grid';
         document.querySelector('.weatherHour section').style.display='none';
     }
     var button4 = document.getElementById("otherCity").addEventListener('click', button4Click);
     function button4Click(){
         document.querySelector('.weatherWeek section').style.display='none';
         document.querySelector('.weatherHour section').style.display='none';
         document.querySelector('.chooseCity').style.position='fixed';
         document.querySelector('.chooseCity').style.display= 'block';
     }
const endpoint = 'https://raw.githubusercontent.com/cc-team-2019/weather-APP/master/src/miasta.json';
const cities = [];
// let searchedLat;
// let searchedLon;

fetch(endpoint)
    .then(blob => blob.json()) 
    .then(data => cities.unshift(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.text_simple.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex  = new RegExp(this.value, 'gi');
        const cityName = place.text_simple.replace(regex, `<span class="hl">${this.value}</span>`)
       return `<li id="button"><span class="name">${cityName}, ${place.text_gray}</span></li>`
    })
    suggestions.innerHTML = html.join('')
    let clickedSearchResult = document.querySelectorAll('#button');
    clickedSearchResult.forEach(elem => {
        elem.addEventListener('click', e => {
            const index = html.indexOf('<li id="button">' + e.currentTarget.innerHTML + '</li>')
            lat = matchArray[index].lat;
            long = matchArray[index].lon;




            const url = `${ROOT_URL}/${lat},${long}`;

            const getWeather = async url => {
               const response = await axios(url);
               const curr = response.data.currently;
               const daily = response.data.daily;
               const temperature = curr.temperature;
           


 //prognoza 24godzinna do wykresu

                   const arr_hours = response.data.hourly.data.slice(0, 24);

               for (let i = 0; i < arr_hours.length; i++) {
                   const temperature_24h = arr_hours[i].temperature;
                  
               }

                   
               for (let i = 0; i < arr_hours.length; i++) {
                   const precipIntensity_24h = arr_hours[i].precipIntensity;
                  
               }
               for (let i = 0; i < arr_hours.length; i++) {
                   const pressure_24h = arr_hours[i].pressure;
                  
               }


//prognoza tygodniowa
const arr_days = response.data.daily.data.slice(0, 7);

for (let i = 0; i < arr_days.length; i++) {
   const temperature_week = arr_days[i].temperatureHigh;
  
}

for (let i = 0; i < arr_days.length; i++) {
   const precipIntensity_week = arr_days[i].precipIntensity;
  
}



for (let i = 0; i < arr_days.length; i++) {
   const pressure_week = arr_days[i].pressure;
  
}
//  const arr_week = response.data.hourly.data;
//  const arr_day = arr_hour.slice(0, 24);

           
               
         
       //zmienne do zaimplementowania w DOM            
               const currTime = new Date;
               const precipIntensity = curr.precipIntensity;
               const pressure = curr.pressure;
               const windSpeed = curr.windSpeed;
              const sunriseTimeStamp = daily.data[0].sunriseTime;
               const sunsetTimeStamp = daily.data[0].sunsetTime;
               const sunriseTime = new Date((sunriseTimeStamp)*1000);      
               const sunsetTime = new Date((sunsetTimeStamp)*1000);             
       
   console.log(sunriseTime);
/// Implementacja DOM
               document.querySelector('.temperature').textContent = ((temperature-32) / 1.8).toFixed(1);
               document.querySelector('#datefull').textContent = currTime;
               document.querySelector('.pressure').textContent = pressure + ' hPa';
               document.querySelector('.precipitation').textContent = precipIntensity.toFixed(1) + " mm/h ";  
               document.querySelector('.wind').textContent = windSpeed.toFixed(1) + " m/s ";
               document.querySelector('#sunrise').textContent = 'Wschód słońca: ' + sunriseTime;
               document.querySelector('#sunset').textContent = 'Zachód słońca: ' + sunsetTime;


        
        }
        


        ///wywołanie funkcji
        getWeather(url);

            return searchInput.value = e.currentTarget.innerText

        })
    })
 
}
const searchInput = document.getElementById('putCity');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);