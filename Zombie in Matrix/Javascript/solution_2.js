// https://www.lintcode.com/problem/574/

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

function zombie(grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let row = grid.length;
  let col = grid[0].length;

  let people_count = 0;

  // BFS
  let queue = [];

  // 计算出所有的僵尸节点
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        people_count++;
      }
      if (grid[i][j] === 1) {
        queue.push({ x: i, y: j });
      }
    }
  }

  if (people_count === 0) {
    return 0;
  }

  let steps = 0;
  while (queue.length) {
    let queue_len = queue.length;
    steps++;

    for (let i = 0; i < queue_len; i++) {
      let cur_pos = queue.shift();

      for (let j = 0; j < 4; j++) {
        let delta = directions[j];
        let new_pos_x = cur_pos.x + delta.x;
        let new_pos_y = cur_pos.y + delta.y;
        if (!isValid(grid, new_pos_x, new_pos_y)) {
          continue;
        }
        grid[new_pos_x][new_pos_y] = 1;
        people_count--;
        // 如果判断有没有全部感染, 则直接判断当前剩余的没感染人类是不是等于 0, 很直接
        // 边执行, 边判断
        if (people_count === 0) {
          return steps;
        }
        queue.push({ x: new_pos_x, y: new_pos_y });
      }
    }
  }

  return -1;
}

function isValid(grid, x, y) {
  let row = grid.length;
  let col = grid[0].length;

  // 如果新的数组越界的话, 则返回 false
  if (x < 0 || x >= row || y < 0 || y >= col) {
    return false;
  }

  // 如果是人类则可走这条路径
  return grid[x][y] === 0;
}

// test cases
let zombie_matrix = [
  [0, 1, 2, 0, 0],
  [1, 0, 0, 2, 1],
  [0, 1, 0, 0, 0],
];

console.log(zombie(zombie_matrix));
