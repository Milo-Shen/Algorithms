// https://leetcode.cn/problems/k-closest-points-to-origin/
// https://www.lintcode.com/problem/612

const kClosest = function (points, k) {
  let list = [];
  let output = [];

  for (let i = 0; i < points.length; i++) {
    let distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
    list.push([distance, points[i]]);
  }

  list.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < k; i++) {
    output.push(list[i][1]);
  }

  return output;
};

// test cases
let points = [
  [1, 3],
  [-2, 2],
];
let k = 1;
console.log(kClosest(points, k));
