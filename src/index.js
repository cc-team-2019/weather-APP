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



