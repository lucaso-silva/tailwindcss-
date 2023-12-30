"use strict";

let darkMode = false;
const button = document.getElementById("button");
const page = document.querySelector('html');

// function changeMode() {

//     if(!darkMode) {
//         page.classList.add("dark");
//         button.innerText = "Disable Dark Mode"
//         darkMode = true;
//     } else {
//         page.classList.remove("dark");
//         button.innerText = "Active Dark Mode"
//         darkMode = false;
//     }
// }

function changeMode() {
    page.classList.toggle("dark");
}