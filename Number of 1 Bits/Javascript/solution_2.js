// https://leetcode.cn/problems/number-of-1-bits/

const hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};

console.log(hammingWeight(11));
