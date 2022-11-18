let darkModeactivator = document.querySelector(".Sito2");
let darkModeBottone = document.getElementById("nottebottone");

function attivadarkmode() {
    darkModeactivator.classList.toggle('light2');
    darkModeactivator.classList.toggle('dark2');
}

darkModeBottone.addEventListener('click', attivadarkmode);

let darkModecard = document.querySelectorAll('.card');

function tuttelecard() {
    for (i = 0; i < darkModecard.length; i++) {
        darkModecard[i].classList.toggle('lightc');
        darkModecard[i].classList.toggle('darkc');
    }
}

darkModeBottone.addEventListener('click', tuttelecard);