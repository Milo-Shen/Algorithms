// https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/

const countPoints = function (points, queries) {
  let answer = [];

  for (let [x1, y1, r] of queries) {
    let count = 0;

    for (let [x, y] of points) {
      let distance = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
      if (distance <= r) {
        count++;
      }
    }

    answer.push(count);
  }

  return answer;
};

// test cases
const points = [
  [1, 3],
  [3, 3],
  [5, 3],
  [2, 2],
];
const queries = [
  [2, 3, 1],
  [4, 3, 1],
  [1, 1, 2],
];
console.log(countPoints(points, queries));
