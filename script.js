"use strict";
const input = document.getElementsByTagName("input");
const arrayInput = Array.from(input);
const button = document.getElementsByTagName("button")[0];
const divResult = document.getElementsByClassName("result");
function filterInput(i) {
    const filteredValue = input[i].value.replaceAll(/[\D]/gim, "").replaceAll(/^[0]+/gim, "");
    input[i].value = filteredValue;
}
function checkNumbers() {
    const empty = arrayInput.find(input => input.value === "");
    button.disabled = empty ? true : false;
}
function raffle() {
    const values = arrayInput.map((input) => parseInt(input.value));
    // const quantity = values[0]
    const numbers = values.slice(1);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const result = Math.floor(Math.random() * (min - max) + max);
    input[1].value = min.toString();
    input[2].value = max.toString();
    divResult[0].innerHTML += `
        <div>
            <h2>${result}</h2>
            <p class="textResult">1º resultado</p>
        </div>
    `;
}
checkNumbers();
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", () => { filterInput(i); }, false);
}
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", checkNumbers, false);
}
button.addEventListener("click", raffle, false);
