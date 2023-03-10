// https://leetcode.cn/problems/jump-game-iv/

const minJumps = function (arr) {
  let map = new Map();
  let n = arr.length;
  let step = 0;

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.get(arr[i]).push(i);
      continue;
    }
    map.set(arr[i], [i]);
  }

  let visit = new Set();
  let queue = [0];

  while (true) {
    let temp = [];
    for (let item of queue) {
      // 已经走访过的点不再走
      if (visit.has(item)) {
        continue;
      }

      if (item === n - 1) return step;

      // 可以往前走
      if (!visit.has(item + 1) && item + 1 < n) temp.push(item + 1);

      // 可以往后走
      if (!visit.has(item - 1) && item - 1 >= 0) temp.push(item - 1);

      // 标记访问
      visit.add(item);

      // 可以跳跃的点
      for (let i = 0, m = map.get(arr[item]).length, data = map.get(arr[item]); i < m; i++) {
        if (!visit.has(data[i])) temp.push(data[i]);
      }

      // 清空访问过的数据
      map.get(arr[item]).length = 0;
    }

    // 重新赋值队列
    queue = temp;
    step++;
  }
};

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
