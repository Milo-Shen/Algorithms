// https://leetcode.cn/problems/string-to-integer-atoi/description/

const myAtoi = function (s) {
  const number = parseInt(s, 10);

  if (isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};

console.log(myAtoi('   -42'));
