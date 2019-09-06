//EventListener: zmiana domyślnego miasta, usunięcie, czy znaleźć po lokalizacji
var changeCity = document.getElementById("changeDefaultCity").addEventListener('click', changeDefaultCity);
var removeCity = document.getElementById("removeDefaultCity").addEventListener('click', removeDefaultCity);
var autoloc = document.getElementById("autolocalization").addEventListener('change', ifAutolocalization);

var changeSettings = document.getElementById("settingsIcon").addEventListener('click', changeSetting);


function changeDefaultCity(){
  if (typeof(Storage) !== "undefined"){
    let city = document.getElementById("putDefaultCity").value;
    if(city!=""){
      /* 
      localStorage.setItem("searchedLat", latitude);
      localStorage.setItem("searchedLon", longitude);
      */ 
    localStorage.setItem("city", city);
    document.getElementById("currentDefaultCity").innerHTML=city;
    }
  }
  else{
    alert("Twoja przeglądarka nie może przechować domyślnej wartości");
  }
}

function removeDefaultCity(){
  if (typeof(Storage) !== "undefined"){
    localStorage.removeItem("city");
    document.getElementById("currentDefaultCity").style.fontWeight = "normal";
    document.getElementById("currentDefaultCity").innerHTML="Nie wybrano";
    document.getElementById("putDefaultCity").value = "";
  }
  else{
    alert("Twoja przeglądarka nie może przechować domyślnej wartości");
  }
}

function ifAutolocalization(){
  if(document.getElementById("autolocalization").checked){
    localStorage.setItem("autolocalization", true);
    document.getElementById("currentDefaultCity").innerHTML = "Została wybrana autolokalizacja";
  }
  else{
    localStorage.removeItem("autolocalization");
    if (localStorage.getItem("city") !== null){
      document.getElementById("currentDefaultCity").style.fontWeight = "bold";
      document.getElementById("currentDefaultCity").innerHTML=localStorage.getItem("city");        
    }
    else{
      document.getElementById("currentDefaultCity").style.fontWeight = "normal";
      document.getElementById("currentDefaultCity").innerHTML="Nie wybrano";
    }
  }
}

function changeSetting(){
  if(document.querySelector(".dropdown-content").style.display=="none"){
    document.querySelector(".dropdown-content").style.display="block";
  }
  else{
    document.querySelector(".dropdown-content").style.display="none";
  }
}
