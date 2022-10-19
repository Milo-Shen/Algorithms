// https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/

const trimMean = function (arr) {
  const len = arr.length;

  arr.sort((a, b) => a - b);

  let sum = 0;

  for (let i = len / 20; i < (19 * len) / 20; i++) {
    sum += arr[i];
  }
  return sum / (len * 0.9);
};

console.log(trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]));
