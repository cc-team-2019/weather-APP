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
    //document.querySelector('.weatherWeek section').style.display='none';
    //document.querySelector('.weatherHour section').style.display='none';
    document.querySelector('.chooseCity').style.position='fixed';
    document.querySelector('.chooseCity').style.display= 'block';
}
