// https://leetcode.cn/problems/minimum-knight-moves/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
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

const DIVIDE = '-';

const minKnightMoves = function (x, y) {
  // 异常检测
  if (x === 0 && y === 0) {
  }

  // 最短路径数
  let distance = 0;

  // 起点和终点
  let source = [0, 0];
  let destination = [x, y];

  // 双向宽度优先搜索
  let forward_queue = [source];
  let forward_set = new Set([source.join(DIVIDE)]);
  let backward_queue = [destination];
  let backward_set = new Set([destination.join(DIVIDE)]);

  while (forward_queue.length && backward_queue.length) {
    distance++;
    if (extend_queue(forward_queue, forward_set, backward_set)) {
      return distance;
    }

    distance++;
    if (extend_queue(backward_queue, backward_set, forward_set)) {
      return distance;
    }
  }

  return -1;
};

function extend_queue(queue, visited, opposite_visited) {
  let coordinate = queue.shift();

  // 国际象棋的走法 ( 8 个方位进行 bfs )
  for (let j = 0; j < 8; j++) {
    let delta = directions[j];
    let new_coordinate_x = coordinate[0] + delta.x;
    let new_coordinate_y = coordinate[1] + delta.y;
    let flag = [new_coordinate_x, new_coordinate_y].join(DIVIDE);

    if (visited.has(flag)) {
      continue;
    }

    if (opposite_visited.has(flag)) {
      return true;
    }

    queue.push([new_coordinate_x, new_coordinate_y]);
    visited.add(flag);
  }

  return false;
}

// 但是单向宽度优先搜索，在数据量大的时候容易超时
console.log(minKnightMoves(5, 5));
