// https://leetcode.cn/problems/power-of-two/

const isPowerOfTwo = function (n) {
  // 一个数 n & 本身 n-1 == 0 一定是 2 的幂次方
  // 前提 n > 0, hashMap的hash运算就是这样 (table.length & table.length-1)
  // 所以hash每次扩容必定要保扩容为 2 ^ n
  return n > 0 && !(n & (n - 1));
};
