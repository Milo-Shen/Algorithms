// https://leetcode.cn/problems/sum-of-two-integers/

const getSum = function (a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};

console.log(getSum(2, 3));
