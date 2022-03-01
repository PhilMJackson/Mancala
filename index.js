// game object
const board = [
  4, 4, 4, 4, 4, 4, 0 /* player 1 */, 4, 4, 4, 4, 4, 4, 0 /* player 2 */,
];
//index 6 & 13 === mancalas

// state
const gameState = {
  board: board, // from above
  currentPlayer: 0, // switch to 1 when the player swaps
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
const board = document.getElementById("board");
board.addEventListener("click", onBoardClick); // etc

//display number of pips in wells & each mancala

//extra turn when ending in own mancala
//
//listen for 'click' to move pips to new pits one at a time

// place in clockwise rotation, skipping opponent's

//hover over pits and show current pip count

//do not show count of zero

//  Win condition
//Once all pits are empty on one side of the board, player with the most pips on their side of board wins

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

//
