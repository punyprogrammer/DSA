class Spreadsheet {
  constructor(rows) {
    this.sheet = Array.from({ length: 26 }, () => Array(1000).fill(0));
  }
  getIndices(cell) {
    const row = cell.charCodeAt(0) - "A".charCodeAt(0);
    const col = Number(cell.slice(1)) - 1;
    return { row, col };
  }
  setCell(cell, val) {
    const { row, col } = this.getIndices(cell);
    this.sheet[row][col] = val;
  }
  resetCell(cell) {
    const { row, col } = this.getIndices(cell);
    this.sheet[row][col] = 0;
  }
  getValue(queryString) {
    const filterdString = queryString.slice(1);
    const operands = filterdString.split("+");
    const left = operands[0];
    const right = operands[1];
    // if both number
    if (!isNaN(left) && !isNaN(right)) {
      return Number(left) + Number(right);
    }
    if (isNaN(left) && !isNaN(right)) {
      const { row, col } = this.getIndices(left);
      return this.sheet[row][col] + Number(right);
    }
    if (!isNaN(left) && isNaN(right)) {
      const { row, col } = this.getIndices(right);
      return this.sheet[row][col] + Number(left);
    } else {
      const { row: row1, col: col1 } = this.getIndices(left);
      const { row: row2, col: col2 } = this.getIndices(right);
      return this.sheet[row1][col1] + this.sheet[row2][col2];
    }
    
  }
}
