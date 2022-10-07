// https://leetcode.cn/problems/count-primes/comments/

const countPrimes = function (n) {
  let flag = new Array(n).fill(true);
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (flag[i]) {
      for (let j = 2 * i; j < n; j += i) {
        flag[j] = false;
      }
      res++;
    }
  }
  return res;
};

console.log(countPrimes(25));
