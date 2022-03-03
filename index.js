//BOARD
const board = document.querySelector(".board");
// board.addEventListener("click", onBoardClick);
// game object
const playField = [
  4, 4, 4, 4, 4, 4, 0, /* player 1 */ 4, 4, 4, 4, 4, 4, 0 /* player 2 */,
];
//index 6 & 13 === mancalas

// state
let gameState = {
  board: board, // from above
  currentPlayer: 0, // switch to 1 when the player swaps
};

let first_Player = {
  playerName: "First Player",
};

let second_Player = {
  playerName: "Second Player",
};

let pitZero = {
  pipNumber: playField[0],
};

let pitOne = {
  pipNumber: playField[1],
};

let pitTwo = {
  pipNumber: playField[2],
};

let pitThree = {
  pipNumber: playField[3],
};

let pitFour = {
  pipNumber: playField[4],
};

let pitFive = {
  pipNumber: playField[5],
};

let mancalaSix = {
  pipNumber: playField[6],
};

let pitSeven = {
  pipNumber: playField[7],
};

let pitEight = {
  pipNumber: playField[8],
};

let pitNine = {
  pipNumber: playField[9],
};

let pitTen = {
  pipNumber: playField[10],
};

let pitEleven = {
  pipNumber: playField[11],
};

let pitTwelve = {
  pipNumber: playField[12],
};

let mancalaThirteen = {
  pipNumber: playField[13],
};

function buildInitialState() {}

//rerender game after selecting pips
function renderState() {}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState(); // show the user the new state
}

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
resetButton.innerText = "Reset";

//GAME TITLE
//Name of game Mancala
const title = document.createElement("div");
title.classList.add("title");
topBar.appendChild(title);
title.innerText = "MANCALA";

//ONE or TWO PLAYER TOGGLE BUTTON
//  If one player, only active side will be bottom side (default)
//  If two player, either side will be active based on who is active player
const playerNumBtn = document.createElement("button");
playerNumBtn.classList.add("playerNumber");
topBar.appendChild(playerNumBtn);
playerNumBtn.innerText = "Player Number";

//ACTIVE PLAYER
const activePlayer = document.createElement("div");
activePlayer.classList.add("activePlayer");
board.appendChild(activePlayer);
activePlayer.innerText = gameState.currentPlayer;

//UPPER BAR
const upperBar = document.createElement("div");
upperBar.classList.add("upperBar");
board.appendChild(upperBar);

//FIRST PLAYER NAME
// Click to rename Player
//      When Solo, only Player One will will be able to renamed
//      When Two Player, Both Player Names can be edited
const firstPlayer = document.createElement("div");
firstPlayer.classList.add("playerOne");
upperBar.appendChild(firstPlayer);
firstPlayer.innerText = first_Player.playerName;

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
//  pipCounterZero
const playerPipCounterZero = document.createElement("div");
playerPipCounterZero.classList.add("pipCounter");
playerPipCounterZero.classList.add("playerPipCounter");
playerPipCounterZero.setAttribute("id", "pipCounterZero");
playerPipCounterField.appendChild(playerPipCounterZero);
playerPipCounterZero.innerText = pitZero.pipNumber;

//  pipCounterOne
const playerPipCounterOne = document.createElement("div");
playerPipCounterOne.classList.add("pipCounter");
playerPipCounterOne.classList.add("playerPipCounter");
playerPipCounterOne.setAttribute("id", "pipCounterOne");
playerPipCounterField.appendChild(playerPipCounterOne);
playerPipCounterOne.innerText = pitOne.pipNumber;

//  pipCounterTwo
const playerPipCounterTwo = document.createElement("div");
playerPipCounterTwo.classList.add("pipCounter");
playerPipCounterTwo.classList.add("playerPipCounter");
playerPipCounterTwo.setAttribute("id", "pipCounterTwo");
playerPipCounterField.appendChild(playerPipCounterTwo);
playerPipCounterTwo.innerText = pitTwo.pipNumber;

//  pipCounterThree
const playerPipCounterThree = document.createElement("div");
playerPipCounterThree.classList.add("pipCounter");
playerPipCounterThree.classList.add("playerPipCounter");
playerPipCounterThree.setAttribute("id", "pipCounterThree");
playerPipCounterField.appendChild(playerPipCounterThree);
playerPipCounterThree.innerText = pitThree.pipNumber;

//  pipCounterFour
const playerPipCounterFour = document.createElement("div");
playerPipCounterFour.classList.add("pipCounter");
playerPipCounterFour.classList.add("playerPipCounter");
playerPipCounterFour.setAttribute("id", "pipCounterFour");
playerPipCounterField.appendChild(playerPipCounterFour);
playerPipCounterFour.innerText = pitFour.pipNumber;

//  pipCounterFive
const playerPipCounterFive = document.createElement("div");
playerPipCounterFive.classList.add("pipCounter");
playerPipCounterFive.classList.add("playerPipCounter");
playerPipCounterFive.setAttribute("id", "pipCounterFive");
playerPipCounterField.appendChild(playerPipCounterFive);
playerPipCounterFive.innerText = pitFive.pipNumber;

//  pipCounterSix
const playerPipCounterSix = document.createElement("div");
playerPipCounterSix.classList.add("pipCounter");
playerPipCounterSix.classList.add("playerPipCounter");
playerPipCounterSix.setAttribute("id", "pipCounterSix");
playerPipCounterField.appendChild(playerPipCounterSix);
playerPipCounterSix.innerText = mancalaSix.pipNumber;

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
opponentPipCounterSeven.innerText = pitSeven.pipNumber;

//  pipCounterEight
const opponentPipCounterEight = document.createElement("div");
opponentPipCounterEight.classList.add("pipCounter");
opponentPipCounterEight.classList.add("opponentPipCounter");
opponentPipCounterEight.setAttribute("id", "pipCounterEight");
opponentPipCounterField.appendChild(opponentPipCounterEight);
opponentPipCounterEight.innerText = pitEight.pipNumber;

//  pipCounterNine
const opponentPipCounterNine = document.createElement("div");
opponentPipCounterNine.classList.add("pipCounter");
opponentPipCounterNine.classList.add("opponentPipCounter");
opponentPipCounterNine.setAttribute("id", "pipCounterNine");
opponentPipCounterField.appendChild(opponentPipCounterNine);
opponentPipCounterNine.innerText = pitNine.pipNumber;

//  pipCounterTen
const opponentPipCounterTen = document.createElement("div");
opponentPipCounterTen.classList.add("pipCounter");
opponentPipCounterTen.classList.add("opponentPipCounter");
opponentPipCounterTen.setAttribute("id", "pipCounterTen");
opponentPipCounterField.appendChild(opponentPipCounterTen);
opponentPipCounterTen.innerText = pitTen.pipNumber;

//  pipCounterEleven
const opponentPipCounterEleven = document.createElement("div");
opponentPipCounterEleven.classList.add("pipCounter");
opponentPipCounterEleven.classList.add("opponentPipCounter");
opponentPipCounterEleven.setAttribute("id", "pipCounterEleven");
opponentPipCounterField.appendChild(opponentPipCounterEleven);
opponentPipCounterEleven.innerText = pitEleven.pipNumber;

//  pipCounterTwelve
const opponentPipCounterTwelve = document.createElement("div");
opponentPipCounterTwelve.classList.add("pipCounter");
opponentPipCounterTwelve.classList.add("opponentPipCounter");
opponentPipCounterTwelve.setAttribute("id", "pipCounterTwelve");
opponentPipCounterField.appendChild(opponentPipCounterTwelve);
opponentPipCounterTwelve.innerText = pitTwelve.pipNumber;

//  marginPipCounterThirteen
const opponentPipCounterThirteen = document.createElement("div");
opponentPipCounterThirteen.classList.add("pipCounter");
opponentPipCounterThirteen.classList.add("opponentPipCounter");
opponentPipCounterThirteen.setAttribute("id", "pipCounterThirteen");
opponentPipCounterField.appendChild(opponentPipCounterThirteen);
opponentPipCounterThirteen.innerText = mancalaThirteen.pipNumber;

//PLAYER MANCALA
const playerMancala = document.createElement("div");
playerMancala.classList.add("mancala");
playerMancala.classList.add("playerMancala");
playerMancala.setAttribute("id", "mancalaSix");
actionField.appendChild(playerMancala);

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
playerPitZero.setAttribute("id", "pitZero");
playerPitField.appendChild(playerPitZero);

//  pitOne
const playerPitOne = document.createElement("div");
playerPitOne.classList.add("pit");
playerPitOne.classList.add("playerPitOne");
playerPitOne.setAttribute("id", "pitOne");
playerPitField.appendChild(playerPitOne);

//  pitTwo
const playerPitTwo = document.createElement("div");
playerPitTwo.classList.add("pit");
playerPitTwo.classList.add("playerPitTwo");
playerPitTwo.setAttribute("id", "pitTwo");
playerPitField.appendChild(playerPitTwo);

//  pitThree
const playerPitThree = document.createElement("div");
playerPitThree.classList.add("pit");
playerPitThree.classList.add("playerPitThree");
playerPitThree.setAttribute("id", "pitThree");
playerPitField.appendChild(playerPitThree);

//  pitFour
const playerPitFour = document.createElement("div");
playerPitFour.classList.add("pit");
playerPitFour.classList.add("playerPitFour");
playerPitFour.setAttribute("id", "pitFour");
playerPitField.appendChild(playerPitFour);

//  pitFive
const playerPitFive = document.createElement("div");
playerPitFive.classList.add("pit");
playerPitFive.classList.add("playerPitFive");
playerPitFive.setAttribute("id", "pitFive");
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

//OPPONENT MANCALA
const opponentMancala = document.createElement("div");
opponentMancala.classList.add("mancala");
opponentMancala.classList.add("opponentMancala");
opponentMancala.setAttribute("id", "mancalaThirteen");
actionField.appendChild(opponentMancala);

//PIP
const pip = document.createElement("div");
pip.classList.add("pip");
pip.setAttribute("id", "pip");

//LOWER BAR
const lowerBar = document.createElement("div");
lowerBar.classList.add("lowerBar");
board.appendChild(lowerBar);

//SECOND PLAYER NAME
const secondPlayer = document.createElement("div");
secondPlayer.classList.add("playerTwo");
lowerBar.appendChild(secondPlayer);
secondPlayer.innerText = second_Player.playerName;

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

//loop

/*const alpha = "abcdefg";

const searchTerm = "a";
const shiftAmt = 2;
const indexOfFirst = alpha.indexOf(searchTerm);
const newIndex = indexOfFirst + (shiftAmt % alpha.length);
const newLetter = alpha[newIndex];
//modulus operator
//-------------> ex. 7 % 6

console.log({ searchTerm, indexOfFirst, newIndex, newLetter });*/
