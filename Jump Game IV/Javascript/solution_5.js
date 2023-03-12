// https://leetcode.cn/problems/jump-game-iv/

// 这里需要注意的点: js queue 的 shift 性能也特别差
const minJumps = function (arr) {
  let len = arr.length;

  // 异常检测
  if (!arr || !len) {
    return -1;
  }

  if (len === 1) {
    return 0;
  }

  let map = get_val_to_pos(arr);

  let min_step = -1;
  let queue = [0];
  let temp = [];
  let visited = new Set([0]);

  while (queue.length) {
    // 当前层有 queue_len 个元素
    let queue_len = queue.length;
    min_step++;

    for (let i = 0; i < queue_len; i++) {
      let cur_pos = queue[i];

      if (cur_pos === len - 1) {
        return min_step;
      }

      let next_pos_set = get_next_position(arr, cur_pos, visited, map);

      for (let next_pos of next_pos_set) {
        if (visited.has(next_pos)) {
          continue;
        }

        temp.push(next_pos);
        visited.add(next_pos);
      }
    }

    queue = temp;
    temp = [];
  }

  return -1;
};

function get_val_to_pos(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (map.has(val)) {
      map.get(val).push(i);
      continue;
    }

    map.set(val, [i]);
  }

  return map;
}

function get_next_position(arr, pos, visited, map) {
  let result = [];

  let left_pos = pos - 1;
  let right_pos = pos + 1;

  if (!visited.has(right_pos) && right_pos < arr.length) {
    result.push(right_pos);
  }

  if (!visited.has(left_pos) && 0 <= left_pos) {
    result.push(left_pos);
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
