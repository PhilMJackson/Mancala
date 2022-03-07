//BOARD
let board = document.querySelector(".board");
// board.addEventListener("click", onBoardClick);
// game object
//index 6 & 13 === mancalas
let playField = [4, 4, 4, 4, 4, 4, 0, /* p1 */ 4, 4, 4, 4, 4, 4, 0 /* p2 */];
// state
let gameState = {
  // playField: [4, 4, 4, 4, 4, 4, 15, /* p1 */ 4, 4, 4, 4, 4, 4, 0 /* p2 */],
  playField: playField, // from above
  currentPlayer: 0, // switch to 1 when the player swaps
  first_Player: "First Player",
  second_Player: "Second Player",
  pitZero: playField[0],
  pitOne: playField[1],
  pitTwo: playField[2],
  pitThree: playField[3],
  pitFour: playField[4],
  pitFive: playField[5],
  mancalaSix: playField[6],
  pitSeven: playField[7],
  pitEight: playField[8],
  pitNine: playField[9],
  pitTen: playField[10],
  pitEleven: playField[11],
  pitTwelve: playField[12],
  mancalaThirteen: playField[13],
};

//TOP BAR
//  Where reset button, game title and toggle button are located
const topBar = document.createElement("div");
topBar.classList.add("topBar");
board.appendChild(topBar);

//RESET BUTTON
//  Resets to initial state
const resetButton = document.createElement("button");
resetButton.classList.add("reset");
topBar.appendChild(resetButton);
resetButton.innerHTML = "Reset";

//GAME TITLE
//Name of game Mancala
const title = document.createElement("div");
title.classList.add("title");
topBar.appendChild(title);
title.innerHTML = "MANCALA";

//ONE or TWO PLAYER TOGGLE BUTTON
//  If one player, only active side will be bottom side (default)
//  If two player, either side will be active based on who is active player
const playerNumBtn = document.createElement("button");
playerNumBtn.classList.add("playerNumber");
topBar.appendChild(playerNumBtn);
playerNumBtn.innerHTML = "Player Number";

//ACTIVE PLAYER
const activePlayer = document.createElement("div");
activePlayer.classList.add("activePlayer");
board.appendChild(activePlayer);
if (!gameState.currentPlayer) {
  activePlayer.innerHTML = gameState.first_Player;
} else {
  activePlayer.innerHTML = gameState.second_Player;
}

//UPPER BAR
const upperBar = document.createElement("div");
upperBar.classList.add("upperBar");
board.appendChild(upperBar);

//SECOND PLAYER NAME
const secondPlayer = document.createElement("div");
secondPlayer.setAttribute("id", "playerTwo");
upperBar.appendChild(secondPlayer);
document.getElementById("playerTwo").contentEditable = true;
secondPlayer.innerHTML = gameState.second_Player;

//PLAY AREA
//  # of Pips in each Pit
const playArea = document.createElement("div");
playArea.classList.add("playArea");
board.appendChild(playArea);

//PLAYER PIP COUNTER FIELD
const playerPipCounterField = document.createElement("div");
playerPipCounterField.classList.add("pipCounterField");
playerPipCounterField.classList.add("playerPipCounterField");
playArea.appendChild(playerPipCounterField);

//PLAYER PIP COUNTER
let pipCounters = [];
//  pipCounterZero
const playerPipCounterZero = document.createElement("div");
playerPipCounterZero.classList.add("pipCounter");
playerPipCounterZero.classList.add("playerPipCounter");
playerPipCounterZero.setAttribute("id", "pipCounterZero");
playerPipCounterField.appendChild(playerPipCounterZero);
pipCounters.push(pipCounterZero);
playerPipCounterZero.innerHTML = gameState.pitZero;

//  pipCounterOne
const playerPipCounterOne = document.createElement("div");
playerPipCounterOne.classList.add("pipCounter");
playerPipCounterOne.classList.add("playerPipCounter");
playerPipCounterOne.setAttribute("id", "pipCounterOne");
playerPipCounterField.appendChild(playerPipCounterOne);
pipCounters.push(pipCounterOne);
playerPipCounterOne.innerHTML = gameState.pitOne;

//  pipCounterTwo
const playerPipCounterTwo = document.createElement("div");
playerPipCounterTwo.classList.add("pipCounter");
playerPipCounterTwo.classList.add("playerPipCounter");
playerPipCounterTwo.setAttribute("id", "pipCounterTwo");
playerPipCounterField.appendChild(playerPipCounterTwo);
pipCounters.push(pipCounterTwo);
playerPipCounterTwo.innerHTML = gameState.pitTwo;

//  pipCounterThree
const playerPipCounterThree = document.createElement("div");
playerPipCounterThree.classList.add("pipCounter");
playerPipCounterThree.classList.add("playerPipCounter");
playerPipCounterThree.setAttribute("id", "pipCounterThree");
playerPipCounterField.appendChild(playerPipCounterThree);
pipCounters.push(pipCounterThree);
playerPipCounterThree.innerHTML = gameState.pitThree;

//  pipCounterFour
const playerPipCounterFour = document.createElement("div");
playerPipCounterFour.classList.add("pipCounter");
playerPipCounterFour.classList.add("playerPipCounter");
playerPipCounterFour.setAttribute("id", "pipCounterFour");
playerPipCounterField.appendChild(playerPipCounterFour);
pipCounters.push(pipCounterFour);
playerPipCounterFour.innerHTML = gameState.pitFour;

//  pipCounterFive
const playerPipCounterFive = document.createElement("div");
playerPipCounterFive.classList.add("pipCounter");
playerPipCounterFive.classList.add("playerPipCounter");
playerPipCounterFive.setAttribute("id", "pipCounterFive");
playerPipCounterField.appendChild(playerPipCounterFive);
pipCounters.push(pipCounterFive);
playerPipCounterFive.innerHTML = gameState.pitFive;

//  pipCounterSix
let playerPipCounterSix = document.createElement("div");
playerPipCounterSix.classList.add("pipCounter");
playerPipCounterSix.classList.add("playerPipCounter");
playerPipCounterSix.setAttribute("id", "pipCounterSix");
playerPipCounterField.appendChild(playerPipCounterSix);
pipCounters.push(pipCounterSix);
playerPipCounterSix.innerHTML = gameState.mancalaSix;

//ACTION FIELD
//  pit and mancala with pips when applicable
const actionField = document.createElement("div");
actionField.classList.add("actionField");
playArea.appendChild(actionField);

//OPPONENT PIP COUNTER FIELD
const opponentPipCounterField = document.createElement("div");
opponentPipCounterField.classList.add("pipCounterField");
opponentPipCounterField.setAttribute("id", "opponentPipCounterField");
playArea.appendChild(opponentPipCounterField);

//OPPONENT PIP COUNTERS
//  pipCounterSeven
const opponentPipCounterSeven = document.createElement("div");
opponentPipCounterSeven.classList.add("pipCounter");
opponentPipCounterSeven.classList.add("opponentPipCounter");
opponentPipCounterSeven.setAttribute("id", "pipCounterSeven");
opponentPipCounterField.appendChild(opponentPipCounterSeven);
pipCounters.push(pipCounterSeven);
opponentPipCounterSeven.innerHTML = gameState.pitSeven;

//  pipCounterEight
const opponentPipCounterEight = document.createElement("div");
opponentPipCounterEight.classList.add("pipCounter");
opponentPipCounterEight.classList.add("opponentPipCounter");
opponentPipCounterEight.setAttribute("id", "pipCounterEight");
opponentPipCounterField.appendChild(opponentPipCounterEight);
pipCounters.push(pipCounterEight);
opponentPipCounterEight.innerHTML = gameState.pitEight;

//  pipCounterNine
const opponentPipCounterNine = document.createElement("div");
opponentPipCounterNine.classList.add("pipCounter");
opponentPipCounterNine.classList.add("opponentPipCounter");
opponentPipCounterNine.setAttribute("id", "pipCounterNine");
opponentPipCounterField.appendChild(opponentPipCounterNine);
pipCounters.push(pipCounterNine);
opponentPipCounterNine.innerHTML = gameState.pitNine;

//  pipCounterTen
const opponentPipCounterTen = document.createElement("div");
opponentPipCounterTen.classList.add("pipCounter");
opponentPipCounterTen.classList.add("opponentPipCounter");
opponentPipCounterTen.setAttribute("id", "pipCounterTen");
opponentPipCounterField.appendChild(opponentPipCounterTen);
pipCounters.push(pipCounterTen);
opponentPipCounterTen.innerHTML = gameState.pitTen;

//  pipCounterEleven
const opponentPipCounterEleven = document.createElement("div");
opponentPipCounterEleven.classList.add("pipCounter");
opponentPipCounterEleven.classList.add("opponentPipCounter");
opponentPipCounterEleven.setAttribute("id", "pipCounterEleven");
opponentPipCounterField.appendChild(opponentPipCounterEleven);
pipCounters.push(pipCounterEleven);
opponentPipCounterEleven.innerHTML = gameState.pitEleven;

//  pipCounterTwelve
const opponentPipCounterTwelve = document.createElement("div");
opponentPipCounterTwelve.classList.add("pipCounter");
opponentPipCounterTwelve.classList.add("opponentPipCounter");
opponentPipCounterTwelve.setAttribute("id", "pipCounterTwelve");
opponentPipCounterField.appendChild(opponentPipCounterTwelve);
pipCounters.push(pipCounterTwelve);
opponentPipCounterTwelve.innerHTML = gameState.pitTwelve;

//  marginPipCounterThirteen
const opponentPipCounterThirteen = document.createElement("div");
opponentPipCounterThirteen.classList.add("pipCounter");
opponentPipCounterThirteen.classList.add("opponentPipCounter");
opponentPipCounterThirteen.setAttribute("id", "pipCounterThirteen");
opponentPipCounterField.appendChild(opponentPipCounterThirteen);
pipCounters.push(pipCounterThirteen);
opponentPipCounterThirteen.innerHTML = gameState.mancalaThirteen;

//PIPS

//OPPONENT MANCALA FIELD
const opponentMancalaField = document.createElement("div");
opponentMancalaField.classList.add("mancalaField");
opponentMancalaField.classList.add("opponentMancalaField");
actionField.appendChild(opponentMancalaField);

//OPPONENT MANCALA PIT
const opponentMancalaPit = document.createElement("div");
opponentMancalaPit.classList.add("pit");
opponentMancalaPit.classList.add("mancalaPit");
opponentMancalaPit.classList.add("opponentMancalaPit");
opponentMancalaPit.setAttribute("id", "mancalaThirteen");
opponentMancalaField.appendChild(opponentMancalaPit);

//PIT FIELD
const pitField = document.createElement("div");
pitField.classList.add("pitField");
pitField.setAttribute("id", "pitZero");
actionField.appendChild(pitField);

//PLAYER PIT FIELD
//rounded square to hold pips
//clickable when pips are present
const playerPitField = document.createElement("div");
playerPitField.classList.add("singlePitField");
playerPitField.classList.add("playerPitField");
pitField.appendChild(playerPitField);

//PLAYER PITS
//  pitZero
const playerPitZero = document.createElement("div");
playerPitZero.classList.add("pit");
playerPitZero.classList.add("playerPitZero");
playerPitZero.setAttribute("id", "0");
playerPitField.appendChild(playerPitZero);

//  pitOne
const playerPitOne = document.createElement("div");
playerPitOne.classList.add("pit");
playerPitOne.classList.add("playerPitOne");
playerPitOne.setAttribute("id", "1");
playerPitField.appendChild(playerPitOne);

//  pitTwo
const playerPitTwo = document.createElement("div");
playerPitTwo.classList.add("pit");
playerPitTwo.classList.add("playerPitTwo");
playerPitTwo.setAttribute("id", "2");
playerPitField.appendChild(playerPitTwo);

//  pitThree
const playerPitThree = document.createElement("div");
playerPitThree.classList.add("pit");
playerPitThree.classList.add("playerPitThree");
playerPitThree.setAttribute("id", "3");
playerPitField.appendChild(playerPitThree);

//  pitFour
const playerPitFour = document.createElement("div");
playerPitFour.classList.add("pit");
playerPitFour.classList.add("playerPitFour");
playerPitFour.setAttribute("id", "4");
playerPitField.appendChild(playerPitFour);

//  pitFive
const playerPitFive = document.createElement("div");
playerPitFive.classList.add("pit");
playerPitFive.classList.add("playerPitFive");
playerPitFive.setAttribute("id", "5");
playerPitField.appendChild(playerPitFive);

//OPPONENT PIT FIELD
const opponentPitField = document.createElement("div");
opponentPitField.classList.add("singlePitField");
opponentPitField.classList.add("opponentPitField");
pitField.appendChild(opponentPitField);

//OPPONENT PITS
//  pitSeven
const opponentPitSeven = document.createElement("div");
opponentPitSeven.classList.add("pit");
opponentPitSeven.classList.add("opponentPitSeven");
opponentPitSeven.setAttribute("id", "pitSeven");
opponentPitField.appendChild(opponentPitSeven);

//  pitEight
const opponentPitEight = document.createElement("div");
opponentPitEight.classList.add("pit");
opponentPitEight.classList.add("opponentPitEight");
opponentPitEight.setAttribute("id", "pitEight");
opponentPitField.appendChild(opponentPitEight);

//  pitNine
const opponentPitNine = document.createElement("div");
opponentPitNine.classList.add("pit");
opponentPitNine.classList.add("opponentPitNine");
opponentPitNine.setAttribute("id", "pitNine");
opponentPitField.appendChild(opponentPitNine);

//  pitTen
const opponentPitTen = document.createElement("div");
opponentPitTen.classList.add("pit");
opponentPitTen.classList.add("opponentPitTen");
opponentPitTen.setAttribute("id", "pitTen");
opponentPitField.appendChild(opponentPitTen);

//  pitEleven
const opponentPitEleven = document.createElement("div");
opponentPitEleven.classList.add("pit");
opponentPitEleven.classList.add("opponentPitEleven");
opponentPitEleven.setAttribute("id", "pitEleven");
opponentPitField.appendChild(opponentPitEleven);

//  pitTwelve
const opponentPitTwelve = document.createElement("div");
opponentPitTwelve.classList.add("pit");
opponentPitTwelve.classList.add("opponentPitTwelve");
opponentPitTwelve.setAttribute("id", "pitTwelve");
opponentPitField.appendChild(opponentPitTwelve);

//PLAYER MANCALA FIELD
const playerMancalaField = document.createElement("div");
playerMancalaField.classList.add("mancalaField");
playerMancalaField.classList.add("playerMancalaField");
actionField.appendChild(playerMancalaField);

//PLAYER MANCALA PIT
const playerMancalaPit = document.createElement("div");
playerMancalaPit.classList.add("pit");
playerMancalaPit.classList.add("mancalaPit");
playerMancalaPit.classList.add("playerMancalaPit");
playerMancalaPit.setAttribute("id", "mancalaSix");
playerMancalaField.appendChild(playerMancalaPit);

//LOWER BAR
const lowerBar = document.createElement("div");
lowerBar.classList.add("lowerBar");
board.appendChild(lowerBar);

//FIRST PLAYER NAME
// Click to rename Player
//      When Solo, only Player One will will be able to renamed
//      When Two Player, Both Player Names can be edited
const firstPlayer = document.createElement("div");
firstPlayer.setAttribute("id", "playerOne");
lowerBar.appendChild(firstPlayer);
document.getElementById("playerOne").contentEditable = true;
firstPlayer.innerText = gameState.first_Player;

//PIPS AND DRAWING THEM
const pip = document.getElementsByClassName("redBead");
const pits = document.getElementsByClassName("pit");

//FUNCTIONS

/*
//Messages
const winningMessage = () => `Player ${currentPlayer} has won!`
const drawMessage = () => `Game ended in a draw!`
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

activePlayer.innerHTML = currentPlayerTurn();
*/

function handleCellPlayed(clickedPitIndex) {
  let indexValue = gameState.playField[clickedPitIndex];
  for (let i = 1; i < indexValue + 1; i++) {
    if (clickedPitIndex + i < playField.length) {
      gameState.playField[clickedPitIndex + i]++;
    }
    if (clickedPitIndex + i >= playField.length) {
      gameState.playField[clickedPitIndex + i - 14]++;
    }
  }
  gameState.playField[clickedPitIndex] = 0;
  console.log(gameState.playField);
  buildState();
  handleResultValidation();
  handlePlayerChange();
}

function handleResultValidation() {
  let gameWon = false;
  let pOneWinCheckArr = [];
  let pTwoWinCheckArr = [];
  for (let i = 1; i < 6; i++) {
    pOneWinCheckArr.push(gameState.playField[i]);
  }
  for (let k = 7; k < 13; k++) {
    pTwoWinCheckArr.push(gameState.playField[k]);
  }
  if (!pOneWinCheckArr) {
    winThisGameVerification();
  }
}

function handlePlayerChange() {}

//move pips
function handlePitClick(clickedPitEvent) {
  const clickedPit = clickedPitEvent.target;
  const clickedPitIndex = parseInt(clickedPit.getAttribute("id"));
  console.log(clickedPitIndex);
  handleCellPlayed(clickedPitIndex);
  handleResultValidation();
}

//RESTART GAME
function handleRestartGame() {
  gameState.playField = [
    4, 4, 4, 4, 4, 4, 0, /* p1 */ 4, 4, 4, 4, 4, 4, 0 /* p2 */,
  ];
  gameState.currentPlayer = 0;
  firstPlayer.innerHTML = gameState.first_Player;
  secondPlayer.innerHTML = gameState.second_Player;
  buildState();
}
//BUTTONS
document
  .querySelectorAll(".pit")
  .forEach((pit) => pit.addEventListener("click", handlePitClick));

resetButton.addEventListener("click", handleRestartGame);

//  Build Board
function buildState() {
  pipCounterZero.innerHTML = gameState.playField[0];
  pipCounterOne.innerHTML = gameState.playField[1];
  pipCounterTwo.innerHTML = gameState.playField[2];
  pipCounterThree.innerHTML = gameState.playField[3];
  pipCounterFour.innerHTML = gameState.playField[4];
  pipCounterFive.innerHTML = gameState.playField[5];
  pipCounterSix.innerHTML = gameState.playField[6];
  pipCounterSeven.innerHTML = gameState.playField[7];
  pipCounterEight.innerHTML = gameState.playField[8];
  pipCounterNine.innerHTML = gameState.playField[9];
  pipCounterTen.innerHTML = gameState.playField[10];
  pipCounterEleven.innerHTML = gameState.playField[11];
  pipCounterTwelve.innerHTML = gameState.playField[12];
  pipCounterThirteen.innerHTML = gameState.playField[13];
}

function addPip() {
  drawField.classList.toggle("pip");
  pipRandom(pip);
}

function pipRandom(imgObj) {
  let left = generateRandom();
  let top = generateRandom();
  let imageStyle = pip.style;
  imageStyle.position = "absolute";
  imageStyle.top = top;
  imageStyle.left = left;
}

function generateRandom() {
  var num = Math.floor(Math.random() * 100 + 1);
  var random = num + "%";
}

//rerender game after selecting pips

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
// update state, maybe with another dozen or so helper functions...

// show the user the new state

//extra turn when ending in own mancala

//listen for 'click' to move pips to new pits one at a time

//.indexOf('target?")
//loop
//
//place in clockwise rotation, skipping opponent's

//hover over pits and show current pip count

//do not show count of zero

//  Win condition

//Once all pits are empty on one side of the board, player with the most pips on their side of board wins

//Once a winner is decided, display name of winner, winner's # of pips, and opponent's # of pips

//  player vs computer
//easy mode highlights end pit when hovering over a pit with pips, computer picks at random

//intermediate does not highlight pips and prioritizes extra turns

// hard mode adds pip capture as priority

//  player vs player
//choose name for each player

//Start order is random

//Alternate turns

//Pick pits on the active players side

// Announce when and who wins or if there is a draw

/*const alpha = "abcdefg";

const searchTerm = "a";
const shiftAmt = 2;
const indexOfFirst = alpha.indexOf(searchTerm);
const newIndex = indexOfFirst + (shiftAmt % alpha.length);
const newLetter = alpha[newIndex];
//modulus operator
//-------------> ex. 7 % 6

console.log({ searchTerm, indexOfFirst, newIndex, newLetter });*/
