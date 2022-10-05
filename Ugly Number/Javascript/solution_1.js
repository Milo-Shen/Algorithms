// https://leetcode.cn/problems/ugly-number/

function isUgly(n) {
  // 异常处理
  if (n < 1) {
    return false;
  }

  while (n % 5 === 0) n /= 5;
  while (n % 3 === 0) n /= 3;
  while (n % 2 === 0) n /= 2;

  return n === 1;
}

console.log(isUgly(8));
