var button1 = document.getElementById("showWeather").addEventListener('click', buttonClick);

function buttonClick(){
    document.querySelector('.chooseCity').style.display= 'none';
    document.querySelector('.weatherPresentation').style.position= 'fixed';
    document.getElementById('settings').style.display='grid';
    document.getElementById('otherCity').style.display='block';
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
    document.getElementById('otherCity').style.display='none';
}

var button5 = document.getElementById("settings").addEventListener('click', button5Click);
function button5Click(){
    document.getElementById('settings').style.backgroundColor='white';
    document.getElementById('settings').style.borderRadius='20px';
    document.getElementById('settings').style.width='90vw';
    document.getElementById('settings').style.height='10vh';
    document.getElementById('settings').style.maxHeight='200px';
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
    document.getElementById('settings').style.right='20px';
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

const msg2 = new SpeechSynthesisUtterance();
msg2.pitch = 1;
msg2.rate = 1;
msg2.volume = 1;
msg2.lang = 'pl'
msg2.voice = msg.voice;

const msg3 = new SpeechSynthesisUtterance();
msg3.pitch = 1;
msg3.rate = 1;
msg3.volume = 1;
msg3.lang = 'pl'
msg3.voice = msg.voice;

const msg4 = new SpeechSynthesisUtterance();
msg4.pitch = 1;
msg4.rate = 1;
msg4.volume = 1;
msg4.lang = 'pl'
msg4.voice = msg.voice;

const msg5 = new SpeechSynthesisUtterance();
msg5.pitch = 1;
msg5.rate = 1;
msg5.volume = 1;
msg5.lang = 'pl'
msg5.voice = msg.voice;

const msg6= new SpeechSynthesisUtterance();
msg6.pitch = 1;
msg6.rate = 1;
msg6.volume = 1;
msg6.lang = 'pl'
msg6.voice = msg.voice;

const msg7 = new SpeechSynthesisUtterance();
msg7.pitch = 1;
msg7.rate = 1;
msg7.volume = 1;
msg7.lang = 'pl'
msg7.voice = msg.voice;

const msg8 = new SpeechSynthesisUtterance();
msg8.pitch = 1;
msg8.rate = 1;
msg8.volume = 1;
msg8.lang = 'pl'
msg8.voice = msg.voice;

const msg9 = new SpeechSynthesisUtterance();
msg9.pitch = 1;
msg9.rate = 1;
msg9.volume = 1;
msg9.lang = 'pl'
msg9.voice = msg.voice;

function speak(e) {
    e.stopPropagation();
    if (document.querySelector('.chooseCity').style.display == '' || document.querySelector('.chooseCity').style.display == 'block') {
        speechSynthesis.speak(msg);
    }
}

function stop() {
    speechSynthesis.cancel();
}

document.querySelector('#soundOn').addEventListener('click', speak);
document.querySelector('#soundOff').addEventListener('click', stop);
//document.querySelector('.chooseCity').addEventListener('mousedown', speak);

function speak2() {
    if (document.querySelector('.chooseCity').style.display == 'none' && document.querySelector('.weatherPresentation').style.position == 'fixed') {
        msg2.text = document.querySelector('#cityName').textContent;
        speechSynthesis.speak(msg2);
        msg3.text = msg3.text = document.querySelector('#datefull').textContent;
        speechSynthesis.speak(msg3);
        msg4.text = 'Temperatura' + document.querySelector('.temperature-block').textContent + 'stopni Celsjusza';
        speechSynthesis.speak(msg4);
        msg5.text = document.querySelector('.precipitation-block').textContent;
        speechSynthesis.speak(msg5);
        msg6.text = document.querySelector('.wind-block').textContent;
        speechSynthesis.speak(msg6);
        msg7.text = document.querySelector('.pressure-block').textContent;
        speechSynthesis.speak(msg7);
        msg8.text = document.querySelector('#sunrise').textContent;
        speechSynthesis.speak(msg8);
        msg9.text = document.querySelector('#sunset').textContent;
        speechSynthesis.speak(msg9);   
    }
}
   
document.querySelector('#soundOn').addEventListener('click', speak2);

function suggestList() {
    if (document.querySelector('#putCity').value=="") {
        document.querySelector('.suggestions').style.display='none';
    } else if (document.querySelector('#putCity').value===document.querySelector('.suggestions').textContent) {
        document.querySelector('.suggestions').style.display='none';
    } else if (document.querySelector('.suggestions').textContent=="") {
        document.querySelector('.suggestions').style.display='none';
    } else {
        document.querySelector('.suggestions').style.display='block';
    }
    let liNumber = document.querySelector('.suggestions').children.length;
    if (liNumber == 1) {
        document.querySelector('.suggestions').style.height='7vh';
    } else if (liNumber == 2) {
        document.querySelector('.suggestions').style.height='14vh';
    } else if (liNumber == 3) {
        document.querySelector('.suggestions').style.height='21vh';
    } else if (liNumber == 4) {
        document.querySelector('.suggestions').style.height='28vh';
    } else if (liNumber == 5) {
        document.querySelector('.suggestions').style.height='35vh';
    } else if (liNumber == 6) {
        document.querySelector('.suggestions').style.height='42vh';
    } if (liNumber > 6) {
        document.querySelector('.suggestions').style.height='49vh';
    } 
}
document.getElementById('putCity').addEventListener('input', suggestList);
document.querySelector('.suggestions').addEventListener('click', suggestList);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', function(e) {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        document.querySelector('#putCity').value = transcript;
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start)
recognition.start();
function speaker() {
    document.querySelector('#putCity').value = document.querySelector('.words').textContent;
}
document.querySelector('#speakOn').addEventListener('click', speaker);