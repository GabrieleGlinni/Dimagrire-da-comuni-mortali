let darkModeactivator = document.querySelector(".Sito");
let darkModeactivatorlinea = document.querySelector(".lineaorizzontale");
let darkModeBottone = document.getElementById("nottebottone");

function attivadarkmode() {
 darkModeactivator.classList.toggle('light');
 darkModeactivator.classList.toggle('dark');
}

function attivadarkmodelinea() {
    darkModeactivatorlinea.classList.toggle('lightl');
    darkModeactivatorlinea.classList.toggle('darkl');
}

darkModeBottone.addEventListener('click', attivadarkmode);
darkModeBottone.addEventListener('click', attivadarkmodelinea);