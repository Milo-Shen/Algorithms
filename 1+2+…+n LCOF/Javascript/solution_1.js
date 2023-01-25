// https://leetcode.cn/problems/qiu-12n-lcof/

const sumNums = function (n) {
  return n === 0 ? 0 : n + sumNums(n - 1);
};

console.log(sumNums(9));
