// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search/

// 搜索的四个方向
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
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

  const check = (i, j, s, k) => {
    if (board[i][j] !== s.charAt(k)) {
      return false;
    } else if (k === s.length - 1) {
      return true;
    }
    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      let new_i = i + dx,
        new_j = j + dy;
      if (new_i >= 0 && new_i < row && new_j >= 0 && new_j < col) {
        if (!visited[new_i][new_j]) {
          const flag = check(new_i, new_j, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const flag = check(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
}

// test cases
let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
let word = 'ABCCED';
console.log(exist(board, word));
