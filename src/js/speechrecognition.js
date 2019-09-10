value = false;
function speakerControlOn() {
    value = true;
}
function speakerControlOff() {
    value = false;
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', function(e) {
    if (value === true) {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
            document.querySelector('#putCity').value = transcript;
        console.log(transcript);
        return transcript;
    }
});

recognition.addEventListener('end', recognition.start)
recognition.start();

document.querySelector('#speakOn').addEventListener('click', speakerControlOn);
document.querySelector('#speakOff').addEventListener('click', speakerControlOff);