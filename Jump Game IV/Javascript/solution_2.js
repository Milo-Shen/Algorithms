// https://leetcode.cn/problems/jump-game-iv/ todo

const minJumps = function (arr) {
  // 异常检测
  if (!arr || !arr.length) {
    return -1;
  }

  if (arr.length === 1) {
    return 0;
  }

  let min_step = -1;
  let cache = new Map();
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

      let next_pos_set = get_next_position(arr, cur_pos, cache);

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

function get_next_position(arr, pos) {
  let result = [];

  let left_pos = pos - 1;
  let right_pos = pos + 1;

  if (0 <= left_pos && left_pos < arr.length) {
    result.push(left_pos);
  }

  if (0 <= right_pos && right_pos < arr.length) {
    result.push(right_pos);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== pos && arr[pos] === arr[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
