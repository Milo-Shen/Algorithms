// https://leetcode.cn/problems/armstrong-number/

const isArmstrong = function (n) {
  const origin = n;
  const bit = String(n).split('');

  let sum = 0;
  let len = bit.length;

  for (let i = 0; i < len; i++) {
    sum = sum + Math.pow(Number(bit[i]), len);
  }

  return sum === origin;
};

console.log(isArmstrong(153));
