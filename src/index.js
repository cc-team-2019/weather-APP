// import Weather from './modules/weather.js';

     let lat, long;

     if ('geolocation' in navigator) {
         console.log('geolocation available');
         navigator.geolocation.getCurrentPosition(async position => {
             lat = (position.coords.latitude);
             long = (position.coords.longitude);
             document.getElementById('latitude').textContent = lat.toFixed(2);
             document.getElementById('longitude'). textContent = long.toFixed(2);
             const api_url =`https://api.darksky.net/forecast/76d4597073b97b1d63fb3d8ec724ef57/${lat},${long}`
            const response = await fetch(api_url);
            const json = await response.json();
            console.log(json);
            
 });
 
     } else {
         console.log('geolocation not available');
     }
