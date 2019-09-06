
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    if(localStorage.getItem("autolocalization") !== null){
      document.getElementById("autolocalization").checked = true;      
      document.querySelector('.chooseCity').style.display= 'none';
      document.querySelector('.weatherPresentation').style.position= 'fixed';
      document.getElementById("currentDefaultCity").innerHTML = "Została wybrana autolokalizacja";
    } else if (localStorage.getItem("city") !== null){
      document.getElementById("currentDefaultCity").style.fontWeight = "bold";
      document.getElementById("currentDefaultCity").innerHTML=localStorage.getItem("city");        
      document.querySelector('.chooseCity').style.display= 'none';
      document.querySelector('.weatherPresentation').style.position= 'fixed';
    }
    else{
      document.getElementById("currentDefaultCity").style.fontWeight = "normal";
      document.getElementById("currentDefaultCity").innerHTML="Nie wybrano";
    }
    }
  else {
    // Sorry! No Web Storage support..
    document.getElementById("putDefaultCity").disabled = true;
  }