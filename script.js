"use strict";
const inputMin = document.getElementById("numMin");
const inputMax = document.getElementById("numMax");
function raffle() {
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(result);
}
