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

const minKnightMoves = function (x, y) {
  // 最短路径数
  let paths = -1;

  let source = [0, 0];
  let destination = [x, y];

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
        if (set.has(setFlag)) {
          continue;
        }
        queue.push([new_coordinate_x, new_coordinate_y]);
        set.add(setFlag);
      }
    }
  }

  return -1;
};

// 但是单向宽度优先搜索，在数据量大的时候容易超时
console.log(minKnightMoves(5, 5));
