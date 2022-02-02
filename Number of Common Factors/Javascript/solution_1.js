// https://leetcode.cn/problems/number-of-common-factors/

const commonFactors = function (a, b) {
  let min = Math.min(a, b);
  let result = 0;

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      result++;
    }
  }

  return result;
};

console.log(commonFactors(12, 6));
