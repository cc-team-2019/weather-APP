const axios = require('axios');
    
let lat, long;
     if ('geolocation' in navigator) {
         console.log('geolocation available');
         navigator.geolocation.getCurrentPosition(position => {
             lat = (position.coords.latitude);
             long = (position.coords.longitude);
             document.getElementById('latitude').textContent = lat.toFixed(2);
             document.getElementById('longitude'). textContent = long.toFixed(2);
             console.log(position);
             const API_KEY = '54ab60394b58b2041b7d11706841f562'
             const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;
      
       
 });
 
     } else {
         console.log('geolocation not available');
     }



    
     

axios.get(`${ROOT_URL}/${lat},${long}`, {
  params: {
      ID: 12345
  }
})
.then((response) => {
    return response;
    console.log(response)
})
.catch((error) => {
    console.log(error);
});
