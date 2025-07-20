/**
 * @param {number} n
 * @return {number}
 */
function createStringMatrix(n) {
  return Array(n).fill().map(() => Array(n).fill('.'));
}

function isValid(board, row, col, n) {
  // Check column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') return false;
  }
  
  // Check 45° diagonal (top-left)
  for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }
  
  // Check 135° diagonal (top-right)
  for (let i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }
  
  return true;
}

function solve(chess, currentRow, n) {
  if (currentRow === n) {
    return 1;
  }
  let count = 0;
  for (let col = 0; col < n; col++) {
    if (isValid(chess, currentRow, col, n)) {
      chess[currentRow][col] = 'Q';
      count+=solve(chess, currentRow + 1, n);
      chess[currentRow][col] = '.';
    }
  }
  return count;
}


var totalNQueens = function(n) {
  const chess = createStringMatrix(n);
  return solve(chess, 0, n);
 
    
};
