// https://leetcode.cn/problems/ugly-number-ii/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const nthUglyNumber = function (n) {
  // 特殊情况处理
  if (n < 0) {
    return -1;
  }

  // 初始化数列
  let dp = Array(n).fill(0);
  dp[0] = 1;

  // 三个指针，分别指向可以下一个乘以 2, 3, 5 的数
  let l2 = 0;
  let l3 = 0;
  let l5 = 0;

  for (let i = 1; i < n; i++) {
    // 生成下一个丑数，第 i + 1 个丑数
    dp[i] = Math.min(dp[l2] * 2, dp[l3] * 3, dp[l5] * 5);

    // 如果丑数是由某个指针指向的数生成的，则这个指针可以后移
    if (dp[i] === dp[l2] * 2) {
      l2++;
    }

    if (dp[i] === dp[l3] * 3) {
      l3++;
    }

    if (dp[i] === dp[l5] * 5) {
      l5++;
    }
  }

  return dp[n - 1];
};

console.log(nthUglyNumber(10));
