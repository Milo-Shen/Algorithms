// https://leetcode.cn/problems/jump-game/
// https://www.lintcode.com/problem/116/description

const canJump = function (nums) {
  // 异常检测
  if (!nums || !nums.length) {
    return false;
  }

  let len = nums.length;

  // state: dp[i] 代表能都跳到坐标 i
  let dp = Array(len).fill(false);

  // initialization: 一开始站在 0 这个位置
  dp[0] = true;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 1. 如果 i 之前有任何一个格子能被跳到
      // 2. 且从这个格子开始能跳到 i, 则 dp[i] 可以被跳到
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[len - 1];
};

console.log(canJump([2, 3, 1, 1, 4]));
