let playField = [4, 4, 4, 4, 4, 4, 0, /* p1 */ 4, 4, 4, 4, 4, 4, 0 /* p2 */];
//              [0, 1, 2, 3, 4, 5, 6,          7, 8, 9, 10,11,12,13 ]

function handleCellPlayed(clickedPitIndex) {
  let indexValue = playField[clickedPitIndex];
  for (let i = 1; i < indexValue + 1; i++) {
    if (clickedPitIndex + i < playField.length) {
      playField[clickedPitIndex + i]++;
    }
    if (clickedPitIndex + i >= playField.length) {
      playField[clickedPitIndex + i - 14]++;
    }
  }
  playField[clickedPitIndex] = 0;
}

handleCellPlayed(11);
