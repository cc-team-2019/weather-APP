const axios = require('axios');
const API_KEY = '76d4597073b97b1d63fb3d8ec724ef57';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/`;
// latittude
let lat; 
//longitude
let long;




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
            console.log(lat);


            return searchInput.value = e.currentTarget.innerText

        })
    })
 
}
const searchInput = document.getElementById('putCity');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);//Event Listnenery
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