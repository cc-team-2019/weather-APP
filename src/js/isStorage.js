import './search.js';

if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    if(localStorage.getItem("autolocalization") !== null){
      document.getElementById("autolocalization").checked = true;      
      document.querySelector('.chooseCity').style.display= 'none';
      document.querySelector('.weatherPresentation').style.position= 'fixed';
      document.getElementById("currentDefaultCity").innerHTML = "Została wybrana autolokalizacja";
      //Pobrać współrzędne aktualnej lokalizacji
    } else if (localStorage.getItem("city") !== null){
      document.getElementById("currentDefaultCity").style.fontWeight = "bold";
      document.getElementById("currentDefaultCity").innerHTML=localStorage.getItem("city");        
      document.querySelector('.chooseCity').style.display= 'none';
      document.querySelector('.weatherPresentation').style.position= 'fixed';
      /*
      Podmiana strony na domyślne współrzędne miasta
      localStorage.getItem('searchedLatDef');
      localStorage.getItem('searchedLonDef');
      */
    }
    else{
      document.getElementById("currentDefaultCity").style.fontWeight = "normal";
      document.getElementById("currentDefaultCity").innerHTML="Nie wybrano";
    }
    }
  else {
    // Sorry! No Web Storage support..
    document.getElementById("putDefaultCity").disabled = true;
  }







  const axios = require('axios');
const API_KEY = '76d4597073b97b1d63fb3d8ec724ef57';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;



if ((typeof(Storage) !== "undefined")&&(localStorage.getItem("city") !== null))
{


  let url = `${ROOT_URL}/${lat},${long}`;
console.log(url);
  const getWeatherByCity = async url => {
     const response = await axios(url);
     const curr = response.data.currently;
     const daily = response.data.daily;
     const temperature = curr.temperature;
   
 


//prognoza 24godzinna do wykresu

         const arr_hours = response.data.hourly.data.slice(0, 24);

     for (let i = 0; i < arr_hours.length; i++) {
         const temperature_24h = arr_hours[i].temperature;
        
         console.log(((temperature_24h -32) / 1.8).toFixed(1));
     }

         
     for (let i = 0; i < arr_hours.length; i++) {
         const precipIntensity_24h = arr_hours[i].precipIntensity;
        
         console.log(precipIntensity_24h.toFixed(1) + " mm/h ");
     }
     for (let i = 0; i < arr_hours.length; i++) {
         const pressure_24h = arr_hours[i].pressure;
        
         console.log(pressure_24h + ' hPa');
     }


//prognoza tygodniowa
const arr_days = response.data.daily.data.slice(0, 7);

for (let i = 0; i < arr_days.length; i++) {
const temperature_week = arr_days[i].temperatureHigh;

console.log(((temperature_week -32) / 1.8).toFixed(1));
}

for (let i = 0; i < arr_days.length; i++) {
const precipIntensity_week = arr_days[i].precipIntensity;

console.log(precipIntensity_week.toFixed(1) + " mm/h ");
}



for (let i = 0; i < arr_days.length; i++) {
const pressure_week = arr_days[i].pressure;

console.log(pressure_week + ' hPa');
}
//  const arr_week = response.data.hourly.data;
//  const arr_day = arr_hour.slice(0, 24);

 
     

//zmienne do zaimplementowania w DOM            
     const currTime = new Date;
     const precipIntensity = curr.precipIntensity;
     const pressure = curr.pressure;
     const windSpeed = curr.windSpeed;
    const sunriseTime = daily.data[0].sunriseTime;
     const sunsetTime = daily.data[0].sunsetTime;



/// Implementacja DOM
     document.querySelector('.temperature').textContent = ((temperature-32) / 1.8).toFixed(1);
     document.querySelector('#datefull').textContent = currTime;
     document.querySelector('.pressure').textContent = pressure + ' hPa';
     document.querySelector('.precipitation').textContent = precipIntensity.toFixed(1) + " mm/h ";  
     document.querySelector('.wind').textContent = windSpeed.toFixed(1) + " m/s ";
     document.querySelector('#sunrise').textContent = 'Wschód słońca: ' + sunriseTime;
     document.querySelector('#sunset').textContent = 'Zachód słońca: ' + sunsetTime;



}
getWeatherByCity(url);



}