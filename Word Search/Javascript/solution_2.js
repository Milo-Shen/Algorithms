// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search/

// 搜索的四个方向
const directions = [
  // 向上移动
  { x: -1, y: 0 },
  // 向右移动
  { x: 0, y: 1 },
  // 向下移动
  { x: 1, y: 0 },
  // 向左移动
  { x: 0, y: -1 },
];

function exist(board, word) {
  // 异常检测
  if (!board || !board.length) {
    return false;
  }

  if (!board[0] || !board[0].length) {
    return false;
  }

  // 计算字母矩阵的行数和列数
  const row = board.length;
  const col = board[0].length;

  // 是否已经访问过
  const visited = new Array(row);
  for (let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(false);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      visited[i][j] = true;
      const flag = check(board, row, col, visited, i, j, word, 0);
      visited[i][j] = false;

      if (flag) {
        return true;
      }
    }
  }

  return false;
}

function is_valid(x, y, board, visited) {
  let row = board.length;
  let col = board[0].length;

  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  return !visited[x][y];
}

const check = (board, row, col, visited, x, y, s, k) => {
  if (board[x][y] !== s.charAt(k)) {
    return false;
  } else if (k === s.length - 1) {
    return true;
  }

  for (let i = 0; i < directions.length; i++) {
    let delta = directions[i];
    let pos_x = x + delta.x;
    let pos_y = y + delta.y;

    if (!is_valid(pos_x, pos_y, board, visited)) {
      continue;
    }

    visited[pos_x][pos_y] = true;
    const flag = check(board, row, col, visited, pos_x, pos_y, s, k + 1);
    visited[pos_x][pos_y] = false;

    if (flag) {
      return true;
    }
  }

  return false;
};

// test cases
let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

let word = 'ABCCED';
console.log(exist(board, word));
