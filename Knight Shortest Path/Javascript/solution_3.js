// https://www.lintcode.com/problem/611/
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意

// 对于点的定义
class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// 国际象棋的 8 个方向
const directions = [
  // 往下走
  { x: 1, y: 2 },
  { x: 1, y: -2 },
  { x: -1, y: 2 },
  { x: -1, y: -2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
  { x: -2, y: 1 },
  { x: -2, y: -1 },
];

function shortestPath(grid, source, destination) {
  // 对异常进行处理
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  if (grid[destination.x][destination.y] === 1) {
    return -1;
  }

  if (source.x === destination.x && source.y === destination.y) {
    return 0;
  }

  let cols = grid[0].length;

  // 最短路径数
  let distance = 0;

  // 双向宽度优先搜索
  let forward_queue = [source];
  let backward_queue = [destination];
  let forward_set = new Set([source.x * cols + source.y]);
  let backward_set = new Set([destination.x * cols + destination.y]);

  while (forward_queue.length && backward_queue.length) {
    distance += 1;
    if (extend_queue(grid, forward_queue, forward_set, backward_set)) {
      return distance;
    }

    distance += 1;
    if (extend_queue(grid, backward_queue, backward_set, forward_set)) {
      return distance;
    }
  }

  return -1;
}

function extend_queue(grid, queue, visited, opposite_set) {
  let cols = grid[0].length;
  let length = queue.length;

  for (let i = 0; i < length; i++) {
    let coordinate = queue.shift();

    // 国际象棋的走法 ( 8 个方位进行 bfs )
    for (let j = 0; j < 8; j++) {
      let delta = directions[j];
      let new_coordinate_x = coordinate.x + delta.x;
      let new_coordinate_y = coordinate.y + delta.y;
      let flag = new_coordinate_x * cols + new_coordinate_y;

      if (!is_valid(grid, visited, new_coordinate_x, new_coordinate_y, flag)) {
        continue;
      }

      if (opposite_set.has(flag)) {
        return true;
      }

      queue.push(new Point(new_coordinate_x, new_coordinate_y));
      visited.add(flag);
    }
  }
}

function is_valid(grid, visited, x, y, flag) {
  // 计算行列
  let row = grid.length;
  let col = grid[0].length;

  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  if (grid[x][y] === 1) {
    return false;
  }

  return !visited.has(flag);
}

// test cases
let grid = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let source = new Point(2, 0);
let destination = new Point(2, 2);
console.log(shortestPath(grid, source, destination));
