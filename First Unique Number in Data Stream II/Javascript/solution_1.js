// https://www.lintcode.com/problem/960
// https://leetcode.cn/problems/first-unique-number/

function FirstUnique(nums) {
  this.nums = nums;
}

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  let nums = this.nums;

  // 特殊情况处理
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let map = new Map();

  for (let i = 0; i < nums_len; i++) {
    let num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 0; i < nums_len; i++) {
    if (map.get(nums[i]) === 1) {
      return nums[i];
    }
  }

  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  this.nums.push(value);
};
