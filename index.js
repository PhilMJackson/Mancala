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
  pipNumber: board[0],
};

let pitOne = {
  pipNumber: board[1],
};

let pitTwo = {
  pipNumber: board[2],
};

let pitThree = {
  pipNumber: board[3],
};

let pitFour = {
  pipNumber: board[4],
};

let pitFive = {
  pipNumber: board[5],
};

let mancalaSix = {
  pipNumber: board[6],
};

let pitSeven = {
  pipNumber: board[7],
};

let pitEight = {
  pipNumber: board[8],
};

let pitNine = {
  pipNumber: board[9],
};

let pitTen = {
  pipNumber: board[10],
};

let pitEleven = {
  pipNumber: board[11],
};

let pitTwelve = {
  pipNumber: board[12],
};

let mancalaThirteen = {
  pipNumber: board[13],
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

//GAME TITLE
//Name of game Mancala
const title = document.createElement("div");
title.classList.add("title");
board.appendChild(title);
title.innerText = "MANCALA";
console.log(board);

//RESET BUTTON
//  Resets to initial state
const resetButton = document.createElement("button");
resetButton.classList.add("reset");
board.appendChild(resetButton);
resetButton.innerText = "Reset";

//ONE or TWO PLAYER TOGGLE BUTTON
//  If one player, only active side will be bottom side (default)
//  If two player, either side will be active based on who is active player
const playerNumBtn = document.createElement("button");
playerNumBtn.classList.add("playerNumber");
board.appendChild(playerNumBtn);
playerNumBtn.innerText = "Player Number";

//PLAYER NAMES
// Click to rename Player
//      When Solo, only Player One will will be able to renamed
//      When Two Player, Both Player Names can be edited
const firstPlayer = document.createElement("div");
firstPlayer.classList.add("playerOne");
board.appendChild(firstPlayer);
firstPlayer.innerText = first_Player.playerName;

const secondPlayer = document.createElement("div");
secondPlayer.classList.add("playerTwo");
board.appendChild(secondPlayer);
secondPlayer.innerText = second_Player.playerName;

//ACTIVE PLAYER
const activePlayer = document.createElement("div");
activePlayer.classList.add("activePlayer");
board.appendChild(activePlayer);
activePlayer.innerText = gameState.currentPlayer;

//OUTER BOARD
//  # of Pips in each Pit
const outerBoard = document.createElement("div");
outerBoard.classList.add("outerBoard");
board.appendChild(outerBoard);

//PIP COUNTERS
const pipCounter = document.createElement("div");
pipCounter.classList.add("pipCounter");
pipCounter.setAttribute("id", "pipCounterZero");
outerBoard.appendChild(pipCounter);
pipCounter.innerText = pitZero.pipNumber;

//INNER BOARD
//  pit and mancala with pips when applicable
const innerBoard = document.createElement("div");
innerBoard.classList.add("innerBoard");
board.appendChild(innerBoard);

//PIT
//rounded square to hold pips
//clickable when pips are present
const pit = document.createElement("div");
pit.classList.add("pit");
pit.setAttribute("id", "pitZero");

//MANCALA
const mancala = document.createElement("div");
mancala.classList.add("mancala");
mancala.setAttribute("id", "mancalaSix");

//PIP
const pip = document.createElement("div");
pip.classList.add("pip");
pip.setAttribute("id", "pip");

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
const shiftAmtt = 2;
const indexOfFirst = alpha.indexOf(searchTerm);
const newIndex = indexOfFirst + (shiftAmtt % alpha.length);
const newLetter = alpha[newIndex];
//modulous operator
//-------------> ex. 7 % 6

console.log({ searchTerm, indexOfFirst, newIndex, newLetter });*/
