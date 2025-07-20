/**
 * @param {character[][]} board
 * @return {boolean}
 */
//
function isValidField(board, x, y) {
  // Row wise check for sudoko
  for (let col = 0; col < 9; col++) {
    if (y === col) continue;
    if (board[x][col] === board[x][y]) return false;
  }
  // col wise check
  for (let row = 0; row < 9; row++) {
    if (row === x) continue;
    if (board[row][y] === board[x][y]) return false;
  }
  // 3*3 grid check
  const topLeftX = 3 * Math.floor(x / 3);
  const topLeftY = 3 * Math.floor(y / 3);
  for (let i = topLeftX; i < topLeftX + 3; i++) {
    for (let j = topLeftY; j < topLeftY+3; j++) {
      if (i === x && j === y) continue;
      if (board[i][j] === board[x][y]) return false;
    }
  }
  return true;
}

var isValidSudoku = function (board) {
  // iterate through the board
  let isValid = true;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const result = isValidField(board, i, j);
        if (!result) {
          isValid = false;
          break;
        }
      }
    }
  }
  return isValid;
};
