// https://leetcode.cn/problems/jump-game-iii/

const canReach = function (arr, start) {
  // 异常检测
  if (!arr || !arr.length) {
    return false;
  }

  if (arr[start] === 0) {
    return true;
  }

  let len = arr.length;
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let node = queue.shift();

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    if (node !== start && arr[node] === 0) {
      return true;
    }

    let left_node = node - arr[node];
    let right_node = node + arr[node];

    if (0 <= left_node && left_node < len) {
      queue.push(left_node);
    }

    if (0 <= right_node && right_node < len) {
      queue.push(right_node);
    }
  }

  return false;
};

console.log(canReach([3, 0, 2, 1, 2], 2));
