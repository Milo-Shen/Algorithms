// https://www.lintcode.com/problem/573

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

function shortestDistance(grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let row = grid.length;
  let col = grid[0].length;

  // 所有房子到邮局的距离和
  let minDistance = -1;

  // 开始遍历邮局网络
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        bfs(grid, i, j);
      }
    }
  }

  return minDistance;
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

// BFS 的时候需要记录路径
function bfs(grid, x, y) {
  let row = grid.length;
  let col = grid[0].length;
  let visited = init_visited(row, col);
  let count = 0;

  let queue = [{ x, y }];
  visited[x][y] = true;

  while (queue.length) {
    let cur_pos = queue.shift();
    count++;

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

  console.log(x, y, count);
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

  // 只有在空地上才能建房子
  return grid[x][y] === 0;
}

// test cases
let grid = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 2, 1],
  [0, 1, 0, 0, 0],
];

console.log(shortestDistance(grid));
