var turn = 0, moveObject, enemyPieceJumped = [], stateGame;
const urlNotAllowed = "notAllowed.png";

window.onload = InitializeBoard();

function InitializeBoard() {

    newTablero();

    var btnNuevaPartida = document.getElementById("btnNuevaPartida");
    btnNuevaPartida.addEventListener("click", InitializeTurn);
}

function InitializeTurn() {

    turn = 1;

    var turnElement = getAndClearTurnElement();
    createAndAppendTurnText(turnElement);

    newTablero();
}

function newTablero() {
    moveObject = {};
    defaultState();
    createBoard();
}

function updateBoard() {    
    createBoard();
    checkTurn();
}

function checkTurn() {

    turn = turn === 1 ? 2 : 1;

    var turnElement = getAndClearTurnElement();

    createAndAppendTurnText(turnElement);
}

function getAndClearTurnElement() {

    var turnElement = document.getElementById("txtTurno");
    turnElement.innerHTML = "";

    return turnElement;
}

function createAndAppendTurnText(turnElement) {

    var color = turn === 1 ? "rojas" : "blancas";

    var textElement = document.createElement("h2");
    textElement.innerText = `Turno jugador: ${turn} (${color})`;

    turnElement.appendChild(textElement);
}