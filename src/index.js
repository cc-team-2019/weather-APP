import './css/style.css';

const axios = require('axios');
const API_KEY = '76d4597073b97b1d63fb3d8ec724ef57';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;

// latittude
let lat; 
//longitude
let long;


// Geolocalization 
     if ('geolocation' in navigator) {
         console.log('geolocation available');
         navigator.geolocation.getCurrentPosition(async position => {
             lat = (position.coords.latitude);
             long = (position.coords.longitude);
             document.getElementById('latitude').textContent = lat;
             document.getElementById('longitude'). textContent = long;
             console.log(lat);
             


             const url = `${ROOT_URL}/${lat},${long}`;

             const getWeather = async url => {
                 const response = await axios(url)
         
                 console.table('response.data:', response.data);
         
         
         }
         
         getWeather(url);
         
 });
 
     } else {
         console.log('geolocation not available');
     }
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


