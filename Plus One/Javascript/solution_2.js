// https://leetcode.cn/problems/plus-one/

function plusOne(digits) {
  let coefficient = digits.length - 1;

  for (let i = coefficient; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;

    if (digits[i] !== 0) {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}

let digits = [1, 9, 9];
console.log(plusOne(digits));
