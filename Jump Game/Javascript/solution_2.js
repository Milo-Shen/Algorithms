// https://leetcode.cn/problems/jump-game/
// https://www.lintcode.com/problem/116/description

const canJump = function (nums) {
  // 异常检测
  if (!nums || !nums.length) {
    return false;
  }

  let len = nums.length;
  let rightmost = 0;
  
  for (let i = 0; i < len; ++i) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= len - 1) {
        return true;
      }
    }
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
