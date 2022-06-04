// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search-ii/

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

function findWords(board, words) {
  // 异常检测
  if (!board || !board.length) {
    return [];
  }

  if (!board[0] || !board[0].length) {
    return [];
  }

  // 存储单词的结果
  let result = new Set();

  // 先找到所有单词的前缀
  let { prefixes, max_len } = find_prefixes_maxLen(words);

  // 计算字母矩阵的行数和列数
  let row = board.length;
  let col = board[0].length;

  // 是否已经访问过
  let visited = init_visited(row, col);

  // DFS 遍历寻找是否 word list 里的单词能否被找到
  for (let i = 0, len = board.length; i < len; i++) {
    for (let j = 0, len_j = board[i].length; j < len_j; j++) {
      visited[i][j] = true;
      dfs(prefixes, board, words, max_len, i, j, board[i][j], visited, result);
      visited[i][j] = false;
    }
  }

  return [...result];
}

// dfs 找到单词 ( 第一步: 递归的定义 )
function dfs(prefixes, board, words, max_len, x, y, str, visited, result) {
  // 第三步, 递归的退出条件
  if (!prefixes.has(str)) {
    return;
  }

  // if (str.length > max_len) {
  //   return;
  // }

  if (words.find((x) => x === str)) {
    result.add(str);
  }

  // 第二步, 递归的拆解
  for (let i = 0; i < directions.length; i++) {
    let delta = directions[i];
    let pos_x = x + delta.x;
    let pos_y = y + delta.y;

    if (!is_valid(pos_x, pos_y, board, visited)) {
      continue;
    }

    visited[pos_x][pos_y] = true;
    dfs(prefixes, board, words, max_len, pos_x, pos_y, str + board[pos_x][pos_y], visited, result);
    visited[pos_x][pos_y] = false;
  }
}

function is_valid(x, y, board, visited) {
  let row = board.length;
  let col = board[0].length;

  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  return !visited[x][y];
}

// 找到单词 words 的所有前缀
function find_prefixes_maxLen(words) {
  let max_len = -Infinity;
  let prefixes = new Set();
  for (let i = 0, len = words.length; i < len; i++) {
    let word_len = words[i].length;
    max_len = max_len < word_len ? word_len : max_len;
    for (let j = 1, len_j = word_len; j <= len_j; j++) {
      prefixes.add(words[i].slice(0, j));
    }
  }

  return { prefixes, max_len };
}

function init_visited(row, col) {
  let visited = [];

  for (let i = 0; i < row; i++) {
    let row_arr = [];
    for (let j = 0; j < col; j++) {
      row_arr.push(false);
    }
    visited.push(row_arr);
  }

  return visited;
}

// test cases
let board = ['doaf', 'agai', 'dcan'];
let words = ['dog', 'dad', 'dgdg', 'can', 'again'];
console.log(findWords(board, words));
