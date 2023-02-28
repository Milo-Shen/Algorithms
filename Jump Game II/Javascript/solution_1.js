// https://leetcode.cn/problems/jump-game-ii/

// dp[i] 记为到达位置i的最小跳数
// dp[i] = min{dp[i-1], dp[i-2],...} + 1 条件是 dp[i-1], dp[i-2]...能到 dp[i]
// 反过来 dp[i] 跳一次距离可以到达的位置为 i + ( 0 ~ nums[i] ) 中记为 m 若 dp[m] > dp[i]+1 则更新 dp[m]
const jump = function (nums) {
  // 异常检测
  if (!nums || !nums.length) {
    return false;
  }

  let len = nums.length;

  // state: dp[i] 代表能都跳到坐标 i 的最小跳跃次数
  let dp = Array(len).fill(Infinity);

  // initialization: 一开始站在 0 这个位置
  dp[0] = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      // 如果跳一次可以到达的位置, 显示的最小跳跃数，比实际的大，则更新
      if (i + j < len && dp[i + j] > dp[i] + 1) {
        dp[i + j] = dp[i] + 1;
      }
    }
  }

  return dp[len - 1];
};

console.log(jump([2, 3, 1, 1, 4]));
