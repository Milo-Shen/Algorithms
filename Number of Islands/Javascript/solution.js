// https://www.lintcode.com/problem/433/
// https://leetcode-cn.com/problems/number-of-islands/

const directions = [
  // 往下走
  { x: 1, y: 0 },
  // 往左走
  { x: 0, y: -1 },
  // 往上走
  { x: -1, y: 0 },
  // 往右走
  { x: 0, y: 1 },
];

const numIslands = function (grid) {
  // 对异常值进行处理
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return 0;
  }

  // 计算数据的行数和列数
  let row = grid.length;
  let col = grid[0].length;

  // 记录走过的节点
  let visited = init_visited(row, col);

  // 记录岛屿的数量
  let count = 0;

  // 开始遍历岛屿
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (~~grid[i][j] === 1 && !visited[i][j]) {
        bfs(grid, i, j, visited);
        count++;
      }
    }
  }

  return count;
};

function bfs(grid, x, y, visited) {
  let queue = [{ x, y }];
  visited[x][y] = true;

  while (queue.length) {
    let cur_pos = queue.shift();

    for (let i = 0; i < 4; i++) {
      let delta = directions[i];
      let new_pos_x = cur_pos.x + delta.x;
      let new_pos_y = cur_pos.y + delta.y;
      if (!isValid(grid, new_pos_x, new_pos_y, visited)) {
        continue;
      }

      queue.push({ x: new_pos_x, y: new_pos_y });
      visited[new_pos_x][new_pos_y] = true;
    }
  }
}

function isValid(grid, x, y, visited) {
  let row = grid.length;
  let col = grid[0].length;

  // 如果新的数组越界的话, 则返回 false
  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  // 如果这个点被访问过, 则返回 false
  if (visited[x][y]) {
    return false;
  }

  // 如果是 1 则返回 true, 0 返回 false
  return !!~~grid[x][y];
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

// test data
let grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
