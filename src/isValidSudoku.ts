export function isValidRow(cellSet: Set<string>, board: string[][], rowNum: number, startPos: number = 0, rowLen: number = 9): boolean {
  // const cellSet = new Set();
  cellSet.clear();
  for(let i = startPos; i < rowLen; i++) {
    if(board[rowNum][i] !== '.') {
      if(cellSet.has(board[rowNum][i])) {
        return false;
      } else {
        // console.log(`Record R${board[rowNum][i]}`)
        cellSet.add(board[rowNum][i]);
      } 
    }
  }
  return true;
}

function isValidCol(cellSet: Set<string>, board: string[][],colNum: number, startPos: number = 0, colLen: number = 9): boolean {
  // const cellSet = new Set();
  cellSet.clear();
  for(let i = startPos; i < colLen; i++) {
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
  // console.log(`box ${boxNum} - rowStart = ${rowStart}, colStart = ${colStart}`);
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
  // console.log('Start')
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
    // console.log(`i = ${i}, isValid = ${isValid}`);
  }
  return isValid;
}