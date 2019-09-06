var button1 = document.getElementById("showWeather").addEventListener('click', buttonClick);

function buttonClick(){
    document.querySelector('.chooseCity').style.display= 'none';
    document.querySelector('.weatherPresentation').style.position= 'fixed';
    document.getElementById('settings').style.display='grid';
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

const msg = new SpeechSynthesisUtterance();
let voices = [];
msg.text = "Witaj w aplikacji maj weather. Podaj nazwę miasta";
msg.pitch = 1;
msg.rate = 1;
msg.volume = 1;
msg.lang = 'pl'

function populateVoices() {
    voices = this.getVoices();
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].lang==="pl-PL") {
            msg.voice = voices[i]
            break;
        }
    }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

function speak() {
    if (document.getElementById('readText').checked === true) {
        speechSynthesis.speak(msg);
    }
}

document.querySelector('.chooseCity').addEventListener('click', speak);

function speak2() {
    if (document.getElementById('readText').checked === true) {
        let msg2 = msg;
        msg2.text = document.querySelector('#cityName').textContent;
        speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('#datefull').textContent;
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('.temperature-block').textContent + 'stopni Celsjusza';
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('.precipitation-block').textContent;
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('.wind-block').textContent;
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('.pressure-block').textContent;
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('#sunrise').textContent;
        //speechSynthesis.speak(msg2);
        //msg2.text = document.querySelector('#sunset').textContent;
        //speechSynthesis.speak(msg2);
    }
}

document.querySelector('.weatherPresentation').addEventListener('click', speak2);