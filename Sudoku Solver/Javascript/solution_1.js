// https://leetcode.cn/problems/sudoku-solver/
// https://www.lintcode.com/problem/802/

const solveSudoku = function (board) {
  dfs(board, 0);
  return board;
};

function dfs(board, index) {
  if (index === 81) {
    return true;
  }

  let x = ~~(index / 9);
  let y = index % 9;
  if (board[x][y] !== '.') {
    return dfs(board, index + 1);
  }

  for (let val = 1; val <= 9; val++) {
    if (!is_valid(board, x, y, val)) {
      continue;
    }

    board[x][y] = String(val);
    if (dfs(board, index + 1)) {
      return true;
    }

    board[x][y] = '.';
  }

  return false;
}

const is_valid = function (board, x, y, val) {
  for (let i = 0; i < 9; i++) {
    if (~~board[x][i] === val) {
      return false;
    }

    if (~~board[i][y] === val) {
      return false;
    }

    if (~~board[~~(x / 3) * 3 + ~~(i / 3)][~~(y / 3) * 3 + (i % 3)] === val) {
      return false;
    }
  }

  return true;
};

let boards = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(solveSudoku(boards));
