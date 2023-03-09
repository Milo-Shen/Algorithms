// https://leetcode.cn/problems/jump-game-iv/

const minJumps = function (arr) {
  // 异常检测
  if (!arr || !arr.length) {
    return -1;
  }

  if (arr.length === 1) {
    return 0;
  }

  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (map.has(val)) {
      map.get(val).push(i);
      continue;
    }

    map.set(val, [i]);
  }

  let min_step = -1;
  let queue = [0];
  let visited = new Set([0]);

  while (queue.length) {
    // 当前层有 queue_len 个元素
    let queue_len = queue.length;
    min_step++;

    for (let i = 0; i < queue_len; i++) {
      let cur_pos = queue.shift();

      if (cur_pos === arr.length - 1) {
        return min_step;
      }

      let next_pos_set = get_next_position(arr, cur_pos, visited, map);

      for (let next_pos of next_pos_set) {
        if (visited.has(next_pos)) {
          continue;
        }

        queue.push(next_pos);
        visited.add(next_pos);
      }
    }
  }

  return -1;
};

function get_next_position(arr, pos, visited, map) {
  let result = [];

  let left_pos = pos - 1;
  let right_pos = pos + 1;

  if (0 <= left_pos) {
    result.push(left_pos);
  }

  if (right_pos < arr.length) {
    result.push(right_pos);
  }

  let pos_arr = map.get(arr[pos]);
  for (let i = 0; i < pos_arr.length; i++) {
    let index = pos_arr[i];
    if (!visited.has(index) && index !== left_pos && index !== right_pos) {
      result.push(index);
    }
  }
  map.set(arr[pos], []);

  return result;
}

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
