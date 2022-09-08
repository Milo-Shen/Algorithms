// https://leetcode.cn/problems/climbing-stairs/

function climbStairs(n) {
  let a = 1;
  let b = 2;

  if (n === 1) {
    return a;
  }

  if (n === 2) {
    return b;
  }

  let temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a;
    a = b;
    b = temp + a;
  }

  return b;
}

console.log(climbStairs(3));
