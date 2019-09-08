import './css/style.css';
import './js/search.js';
<<<<<<< HEAD
import './js/script.js';
//import './js/script2.js';
//import './js/isStorage.js';
=======
>>>>>>> fbc97dbe80b66b83181ddc44a2e9b65948a3c8df

const axios = require('axios');
const API_KEY = '76d4597073b97b1d63fb3d8ec724ef57';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;
import ApexCharts from 'apexcharts';
// latittude
let lat; 
//longitude
let long;


// Geolokalizacja
     if ('geolocation' in navigator) {
         console.log('geolocation available');
         navigator.geolocation.getCurrentPosition(async position => {
             lat = (position.coords.latitude);
             long = (position.coords.longitude);
        
             console.log(lat);
             
//wyciągnięcie danych z API
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
         


         ///wywołanie funkcji
         getWeather(url);
         
 });
 /// wyłapanie braku geolokalizacji
     } else {
         console.log('geolocation not available');
     }

<<<<<<< HEAD






=======
>>>>>>> fbc97dbe80b66b83181ddc44a2e9b65948a3c8df
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
<<<<<<< HEAD
         //document.querySelector('.weatherWeek section').style.display='none';
         //document.querySelector('.weatherHour section').style.display='none';
         document.querySelector('.chooseCity').style.position='fixed';
         document.querySelector('.chooseCity').style.display= 'block';
     }

     var button5 = document.getElementById("settings").addEventListener('click', button5Click);

     function button5Click(){
         document.getElementById('settings').style.backgroundColor='white';
         document.getElementById('settings').style.borderRadius='20px';
         document.getElementById('settings').style.width='90vw';
         document.getElementById('settings').style.height='40vh';
         document.getElementById('settings').style.border="2px solid gold"
         let setting = document.getElementById('settings').children;
            for (let a=0; a < setting.length; a++) {
            setting[a].style.display='flex';
            setting[a].style.padding='0 10px';
            setting[a].style.alignSelf="center";
            setting[a].style.justifyContent="space-between";
            }
         document.getElementById('accept').style.width='100%';
         document.getElementById('accept').style.justifySelf='center';
     }

     var button6 = document.getElementById('accept').addEventListener('click', button6Click);
     function button6Click(e){
         e.stopPropagation();
         let setting = document.getElementById('settings').children;
         for (let a=0; a < setting.length; a++) {
             setting[a].style.display='none';
         }
        document.getElementById('settings').style.removeProperty('background-color');
        document.getElementById('settings').style.borderRadius='0';
        document.getElementById('settings').style.width='30px';
        document.getElementById('settings').style.height='30px';
        document.getElementById('settings').style.border="0"
}


=======
         document.querySelector('.weatherWeek section').style.display='none';
         document.querySelector('.weatherHour section').style.display='none';
         document.querySelector('.chooseCity').style.position='fixed';
         document.querySelector('.chooseCity').style.display= 'block';
     }
>>>>>>> fbc97dbe80b66b83181ddc44a2e9b65948a3c8df
