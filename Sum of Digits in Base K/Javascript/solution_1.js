// https://leetcode.cn/problems/sum-of-digits-in-base-k/

const sumBase = function (n, k) {
  let sum = 0;

  while (n) {
    sum += n % k;
    n = ~~(n / k);
  }

  return sum;
};

console.log(sumBase(34, 6));
