// https://www.lintcode.com/problem/630
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 0, 1 数组，和题目介绍不一样

// 往左走的 4 个方向
const backward_directions = [
  { x: 1, y: -2 },
  { x: -1, y: -2 },
  { x: 2, y: -1 },
  { x: -2, y: -1 },
];

// 往右走的 4 个方向
const forward_directions = [
  { x: 1, y: 2 },
  { x: -1, y: 2 },
  { x: 2, y: 1 },
  { x: -2, y: 1 },
];

function shortestPath2(grid) {
  // 对异常进行处理
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let rows = grid.length;
  let cols = grid[0].length;

  if (grid[rows - 1][cols - 1]) {
    return -1;
  }

  if (rows * cols === 1) {
    return 0;
  }

  // 起点和终点
  let source = [0, 0];
  let destination = [rows - 1, cols - 1];

  // 最短路径数
  let distance = 0;

  // 双向宽度优先搜索
  let forward_queue = [source];
  let backward_queue = [destination];
  let forward_set = new Set([source[0] * cols + source[1]]);
  let backward_set = new Set([destination[0] * cols + destination[1]]);

  while (forward_queue.length && backward_queue.length) {
    distance += 1;
    if (extend_queue(grid, forward_queue, forward_set, backward_set, forward_directions)) {
      return distance;
    }

    distance += 1;
    if (extend_queue(grid, backward_queue, backward_set, forward_set, backward_directions)) {
      return distance;
    }
  }

  return -1;
}

function extend_queue(grid, queue, visited, opposite_set, directions) {
  let cols = grid[0].length;
  let length = queue.length;

  for (let i = 0; i < length; i++) {
    let coordinate = queue.shift();

    // 国际象棋的走法 ( 8 个方位进行 bfs )
    for (let j = 0; j < 4; j++) {
      let delta = directions[j];
      let new_coordinate_x = coordinate[0] + delta.x;
      let new_coordinate_y = coordinate[1] + delta.y;
      let flag = new_coordinate_x * cols + new_coordinate_y;

      if (!is_valid(grid, visited, new_coordinate_x, new_coordinate_y, flag)) {
        continue;
      }

      if (opposite_set.has(flag)) {
        return true;
      }

      queue.push([new_coordinate_x, new_coordinate_y]);
      visited.add(flag);
    }
  }

  return false;
}

function is_valid(grid, visited, x, y, flag) {
  // 计算行列
  let row = grid.length;
  let col = grid[0].length;

  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  if (grid[x][y]) {
    return false;
  }

  return !visited.has(flag);
}

// test cases
let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(shortestPath2(grid));
