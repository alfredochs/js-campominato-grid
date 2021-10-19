// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const gameDifficult = document.getElementById("game-difficult");
const buttonPlayGame = document.getElementById("play-button");
const generalSquare = document.getElementById("general-square");

buttonPlayGame.addEventListener("click", function () {
    const livelloScelto = parseInt(gameDifficult.value);
    const boxesToCreate = quantityBoxes(livelloScelto);
    generateBoxes(boxesToCreate);
    // console.log("il livello scelto è: ", livelloScelto);
    // console.log(`box da creare ${boxesToCreate}`);
});



function quantityBoxes(livelloScelto) {
    // let quantity;
    // switch (parseInt(livelloScelto)) {
    //     case 1: quantity = 100; break;
    //     case 2: quantity = 81; break;
    //     case 3: quantity = 49; break;
    // }
    // return quantity;
    let quantity;
    if (livelloScelto === 1) {
        quantity = 100;
    } else if (livelloScelto === 2) {
        quantity = 81;
    } else if (livelloScelto === 3) {
        quantity = 49;
    }
    return quantity;
}

function generateBoxes(boxesNumber) {
    generalSquare.innerHTML = "";

    const boxesXrow = Math.sqrt(boxesNumber);
    const boxesSize = 100 / boxesXrow;
    for (let i = 0; i < boxesNumber; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxesSize + "%";
        box.style.height = boxesSize + "%";
        generalSquare.append(box);
        box.textContent = i + 1;
        box.addEventListener("click", boxOnClick);

    }
}

function boxOnClick() {
    this.classList.toggle("box-on-click");
}
