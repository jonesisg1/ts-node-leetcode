export function isValidRow(cellSet: Set<string>, board: string[][], rowNum: number): boolean {
  cellSet.clear();
  for(let i = 0; i < 9; i++) {
    if(board[rowNum][i] !== '.') {
      if(cellSet.has(board[rowNum][i])) {
        return false;
      } else {
        cellSet.add(board[rowNum][i]);
      } 
    }
  }
  return true;
}

function isValidCol(cellSet: Set<string>, board: string[][],colNum: number): boolean {
  cellSet.clear();
  for(let i = 0; i < 9; i++) {
    if(board[i][colNum] !== '.') {
      if(cellSet.has(board[i][colNum])) {
        return false;
      } else {
        cellSet.add(board[i][colNum]);
      } 
    }
  }
  return true;
}

export function isValidBox(cellSet: Set<string>, board: string[][], boxNum: number): boolean {
  const colStart = (boxNum < 3) ? boxNum * 3 : (boxNum < 6) ? (boxNum - 3) * 3 : (boxNum < 9) ? (boxNum - 6) * 3 : 0;
  const rowStart = (boxNum < 3) ? 0 : (boxNum < 6) ? 3 : (boxNum < 9) ? 6 : 0;
  cellSet.clear();
  for(let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if(board[rowStart + x][colStart + y] !== '.') {
        if(cellSet.has(board[rowStart + x][colStart + y])) {
          return false;
        } else {
          cellSet.add(board[rowStart + x][colStart + y]);
        } 
      }
    }
  }
  return true;
}

export function isValidSudoku(board: string[][]): boolean {
  const cellSet: Set<string> = new Set();
  let isValid: boolean = true;
  for(let i = 0; i < 9; i++) {
    isValid = isValidRow(cellSet, board, i);
    if(isValid === false) {
      break;
    }
    isValid = isValidCol(cellSet, board, i);
    if(isValid === false) {
      break;
    }
    isValid = isValidBox(cellSet, board, i);
    if(isValid === false) {
      break;
    }
  }
  return isValid;
}