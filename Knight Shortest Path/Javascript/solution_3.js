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
    return 0;
  }

  // 计算列数
  let col = grid[0].length;

  let queue = [source];
  let map = new Map();
  map.set(source.x * col + source.y, 0);

  while (queue.length) {
    let level_length = queue.length;
    for (let i = 0; i < level_length; i++) {
      let coordinate = queue.shift();

      let old_flag = coordinate.x * col + coordinate.y;
      // 若是找到了, 则退出
      if (coordinate.x === destination.x && coordinate.y === destination.y) {
        return map.get(old_flag);
      }

      // 国际象棋的走法 ( 8 个方位进行 bfs )
      for (let j = 0; j < 8; j++) {
        let delta = directions[j];
        let new_coordinate_x = coordinate.x + delta.x;
        let new_coordinate_y = coordinate.y + delta.y;
        let new_Flag = new_coordinate_x * col + new_coordinate_y;
        if (map.has(new_Flag) || !is_valid(grid, new_coordinate_x, new_coordinate_y)) {
          continue;
        }
        queue.push({ x: new_coordinate_x, y: new_coordinate_y });
        map.set(new_Flag, map.get(old_flag) + 1);
      }
    }
  }

  return -1;
}

function is_valid(grid, x, y) {
  // 计算行列
  let row = grid.length;
  let col = grid[0].length;

  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  return !grid[x][y];
}

// test cases
let grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let source = new Point(2, 0);
let destination = new Point(2, 2);
console.log(shortestPath(grid, source, destination));
