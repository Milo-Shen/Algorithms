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
  let minDistance = Infinity;

  // 找到所有房子的数量
  let totalHouse = findHouseCount(grid, row, col);

  // 开始遍历邮局网络
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        let total = bfs(grid, i, j, totalHouse);
        if (minDistance > total) {
          minDistance = total;
        }
      }
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
}

function findHouseCount(grid, row, col) {
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
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
function bfs(grid, x, y, totalHouse) {
  let row = grid.length;
  let col = grid[0].length;
  let visited = init_visited(row, col);
  let count = 0;
  let sum = 0;
  let visited_house = 0;

  let queue = [{ x, y }];
  visited[x][y] = true;

  while (queue.length) {
    count++;

    let queue_len = queue.length;
    for (let i = 0; i < queue_len; i++) {
      let cur_pos = queue.shift();

      for (let j = 0; j < 4; j++) {
        let delta = directions[j];
        let new_pos_x = cur_pos.x + delta.x;
        let new_pos_y = cur_pos.y + delta.y;
        if (isValid(grid, new_pos_x, new_pos_y, visited)) {
          visited[new_pos_x][new_pos_y] = true;
          if (grid[new_pos_x][new_pos_y] === 1) {
            visited_house++;
            sum += count;
          }

          if (grid[new_pos_x][new_pos_y] === 0) {
            queue.push({ x: new_pos_x, y: new_pos_y });
          }
        }
      }
    }
  }

  return visited_house === totalHouse ? sum : Infinity;
}

function isValid(grid, x, y, visited) {
  let row = grid.length;
  let col = grid[0].length;

  // 如果新的数组越界的话, 则返回 false
  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  // 如果这个点被访问过, 则返回 false
  return !visited[x][y];
}

// test cases
let grid = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];

console.log(shortestDistance(grid));
