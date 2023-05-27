"use strict";
const input = document.getElementsByTagName("input");
const inputMin = document.getElementById("numMin");
const inputMax = document.getElementById("numMax");
const button = document.getElementsByTagName("button");
function checkNumbers() {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    if (!min || !max) {
        button[0].disabled = true;
    }
    else {
        button[0].disabled = false;
    }
    console.log(button[0]);
}
checkNumbers();
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", checkNumbers, false);
}
function raffle() {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(result);
}
