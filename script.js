var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function colorChange(){
    localStorage.setItem('col1', color1.value);
    localStorage.setItem('col2', color2.value);
    body.style.background = 
    "linear-gradient(to right,"
     +  localStorage.getItem('col1') 
     + ", " 
     + localStorage.getItem('col2') 
     + ")";
    //  console.log(color1.value);
     css.textContent = body.style.background + ";";
     localStorage.setItem('name', 'samwise gamgee');
}



// localStorage.setItem('colorSetting', colorChange);
console.log(localStorage.getItem('name'));
console.log(color1.value);
console.log(localStorage.getItem('col1'));

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

color1.value = localStorage.getItem('col1');

console.log(color1.value);

body.style.background = 
    "linear-gradient(to right,"
     +  localStorage.getItem('col1') 
     + ", " 
     + localStorage.getItem('col2') 
     + ")";

// localStorage.setItem('col1', 'blue');
// colorChange();
