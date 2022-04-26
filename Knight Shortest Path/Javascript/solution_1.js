// https://www.lintcode.com/problem/611/

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

  // 最短路径数
  let paths = -1;

  let queue = [source];
  let set = new Set([source.join('')]);

  while (queue.length) {
    paths++;

    let level_length = queue.length;
    for (let i = 0; i < level_length; i++) {
      let coordinate = queue.shift();

      // 若是找到了, 则退出
      if (coordinate[0] === destination[0] && coordinate[1] === destination[1]) {
        return paths;
      }

      // 国际象棋的走法 ( 8 个方位进行 bfs )
      for (let j = 0; j < 8; j++) {
        let delta = directions[j];
        let new_coordinate_x = coordinate[0] + delta.x;
        let new_coordinate_y = coordinate[1] + delta.y;
        let setFlag = `${new_coordinate_x}${new_coordinate_y}`;
        if (set.has(setFlag) || !is_valid(grid, new_coordinate_x, new_coordinate_y)) {
          continue;
        }
        queue.push([new_coordinate_x, new_coordinate_y]);
        set.add(setFlag);
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

  return grid[x][y] === 0;
}

// test cases
let grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let source = [2, 0];
let destination = [2, 2];
console.log(shortestPath(grid, source, destination));
