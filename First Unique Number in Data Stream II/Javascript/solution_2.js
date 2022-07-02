// https://www.lintcode.com/problem/960
// https://leetcode.cn/problems/first-unique-number/

function FirstUnique(nums) {
  this.nums = nums;
  this.map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    let value = nums[i];
    this.map.set(value, (this.map.get(value) || 0) + 1);
  }
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

  for (let i = 0; i < nums_len; i++) {
    if (this.map.get(nums[i]) === 1) {
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
  this.map.set(value, (this.map.get(value) || 0) + 1);
};

// test cases
let first_unique = new FirstUnique([2, 3, 5]);
console.log(first_unique.showFirstUnique());
