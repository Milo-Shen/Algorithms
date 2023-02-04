// https://leetcode.cn/problems/sudoku-solver/

const isValidSudoku = function (board) {
  // 每一行是否出现当前数字
  let row_sets = Array(9);

  // 每一列上是否出现当前数字
  let col_sets = Array(9);

  // 3x3 九宫格内是否只出现一次当前数字
  let area_sets = Array(9);

  for (let i = 0; i < 9; i++) {
    row_sets[i] = new Map();
    col_sets[i] = new Map();
    for (let j = 0; j < 9; j++) {
      // 初始化 row_sets
      if (board[i][j] !== '.') {
        let count = row_sets[i].get(board[i][j]) || 0;
        row_sets[i].set(board[i][j], count + 1);
      }

      // 初始化 col_sets
      if (board[j][i] !== '.') {
        let count = col_sets[i].get(board[j][i]) || 0;
        col_sets[i].set(board[j][i], count + 1);
      }

      // 初始化 3x3
      let pos = ~~(i / 3) * 3 + ~~(j / 3);
      area_sets[pos] = area_sets[pos] || new Map();
      if (board[i][j] !== '.') {
        let count = area_sets[pos].get(board[i][j]) || 0;
        area_sets[pos].set(board[i][j], count + 1);
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      // 检查当前行
      if (row_sets[i].get(num) > 1) {
        return false;
      }

      // 检查当前列
      if (col_sets[j].get(num) > 1) {
        return false;
      }

      // 检查 3x3
      let pos = ~~(i / 3) * 3 + ~~(j / 3);
      if (area_sets[pos].get(num) > 1) {
        return false;
      }
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
console.log(isValidSudoku(boards));
