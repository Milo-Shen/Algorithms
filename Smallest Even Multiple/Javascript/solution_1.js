// https://leetcode.cn/problems/smallest-even-multiple/

const smallestEvenMultiple = function (n) {
  return ((n % 2) + 1) * n;
};

console.log(smallestEvenMultiple(10));