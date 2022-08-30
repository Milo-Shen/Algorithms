// https://leetcode.cn/problems/plus-one/
// 下面的算法会有精度溢出的问题

function plusOne(digits) {
  let coefficient = digits.length - 1;
  let num = 0;

  for (let i = 0; i <= coefficient; i++) {
    num += Math.pow(10, coefficient - i) * digits[i];
  }

  num += 1;

  let result = [];

  do {
    let val = num % 10;
    result.unshift(val);
    num = ~~(num / 10);
  } while (num);

  return result;
}

let digits = [1, 2, 3];
console.log(plusOne(digits));
