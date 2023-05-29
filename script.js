"use strict";
const input = document.getElementsByTagName("input");
const arrayInput = Array.from(input);
const button = document.getElementById("startButton");
const divResult = document.getElementsByClassName("result");
const checkRepeat = document.getElementById("checkRepeat");
function filterInput(i) {
    const filteredValue = input[i].value.replaceAll(/[\D]/gim, "").replaceAll(/^[0]+/gim, "");
    input[i].value = filteredValue;
    checkNumbers();
}
function checkNumbers() {
    const empty = arrayInput.find(input => input.value === "");
    button.disabled = empty ? true : false;
    const values = arrayInput.map((input) => parseInt(input.value));
    const quantity = values[0];
    const numbers = values.slice(1);
    const repeat = checkRepeat.getAttribute("repeat");
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    if (!repeat && quantity && quantity > max - min + 1) {
        const alert = document.getElementById("alert");
        alert.innerHTML = `Só pode sortear até ${max - min + 1} ${max - min + 1 == 1 ? "número" : "números"}`;
        button.disabled = true;
    }
    else {
        const alert = document.getElementById("alert");
        alert.innerHTML = "";
        button.disabled = false;
    }
}
function onOffRepeat() {
    const repeat = checkRepeat.getAttribute("repeat");
    if (repeat) {
        checkRepeat.removeAttribute("repeat");
        checkRepeat.style.background = "var(--gray)";
        checkRepeat.innerText = "Não";
    }
    else {
        checkRepeat.setAttribute("repeat", "repeat");
        checkRepeat.style.background = "var(--blue2)";
        checkRepeat.innerText = "Sim";
    }
    console.log(checkRepeat);
}
function raffle() {
    const values = arrayInput.map((input) => parseInt(input.value));
    const quantity = values[0];
    const numbers = values.slice(1);
    const attributes = Array.from(checkRepeat.attributes).map((attr) => attr.name);
    const repeat = attributes.indexOf("repeat") === -1 ? false : true;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    let result = [];
    while (result.length < quantity) {
        const sort = Math.floor((Math.random() * (max - min + 1)) + min);
        if (!repeat) {
            if (result.indexOf(` ${sort.toString()}`) === -1) {
                result.push(` ${sort.toString()}`);
            }
        }
        else {
            result.push(` ${sort.toString()}`);
        }
    }
    input[1].value = min.toString();
    input[2].value = max.toString();
    divResult[0].innerHTML += `
        <div>
            <h2>${result}</h2>
            <p class="textResult">${quantity} ${quantity === 1 ? "número sorteado" : "números sorteados"} de ${min} até ${max}.</p>
        </div>
    `;
}
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", () => { filterInput(i); }, false);
}
button.addEventListener("click", raffle, false);
checkRepeat.addEventListener("click", onOffRepeat, false);
