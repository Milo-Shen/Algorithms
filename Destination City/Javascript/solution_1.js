// https://leetcode.cn/problems/destination-city/

const destCity = function (paths) {
  let set = new Set();

  for (let i = 0; i < paths.length; i++) {
    set.add(paths[i][0]);
  }

  for (let i = 0; i < paths.length; i++) {
    let dest = paths[i][1];
    if (!set.has(dest)) {
      return dest;
    }
  }
};

console.log(
  destCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ]),
);
