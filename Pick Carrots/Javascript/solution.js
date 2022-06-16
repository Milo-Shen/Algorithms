// https://www.lintcode.com/problem/1896/

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

function pickCarrots(carrot) {
  // 异常处理
  if (!carrot || !carrot.length) {
    return 0;
  }

  // 行数和列数
  let row = carrot.length;
  let col = carrot[0].length;

  // 起点坐标
  let start_x = Math.floor((row + 1) / 2) - 1;
  let start_y = Math.floor((col + 1) / 2) - 1;

  // 坐标是否被访问过
  let visited = init_visited(row, col);
  let queue = [{ x: start_x, y: start_y }];
  visited[start_x][start_y] = true;

  // 胡萝卜的总数量
  let total = 0;

  while (queue.length) {
    let node = queue.shift();
    total += carrot[node.x][node.y];

    let max_node = { val: -Infinity, node: null };

    // 找到四个方向中, 胡萝卜最多的点
    for (let i = 0; i < 4; i++) {
      let new_x = node.x + directions[i].x;
      let new_y = node.y + directions[i].y;

      // 对坐标越界进行检查
      if (new_x < 0 || new_x >= row || new_y < 0 || new_y >= col) {
        continue;
      }

      // 如果已经访问过, 则跳过
      if (visited[new_x][new_y]) {
        continue;
      }

      let next_carrot = carrot[new_x][new_y];
      if (next_carrot && max_node.val < next_carrot) {
        max_node = { val: next_carrot, node: { x: new_x, y: new_y } };
      }
    }

    if (max_node.val !== -Infinity) {
      visited[max_node.node.x][max_node.node.y] = true;
      queue.push(max_node.node);
    }
  }

  return total;
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
let carrot = [
  [5, 3, 7, 1, 7],
  [4, 6, 5, 2, 8],
  [2, 1, 1, 4, 6],
];

console.log(pickCarrots(carrot));
