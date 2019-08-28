// import Weather from './modules/weather.js';

    

     if ('geolocation' in navigator) {
         console.log('geolocation available');
         navigator.geolocation.getCurrentPosition(position => {
             const lat = (position.coords.latitude);
             const long = (position.coords.longitude);
             document.getElementById('latitude').textContent = lat;
             document.getElementById('longitude'). textContent = long;
   console.log(position)
            
 });
 
     } else {
         console.log('geolocation not available');
     }
