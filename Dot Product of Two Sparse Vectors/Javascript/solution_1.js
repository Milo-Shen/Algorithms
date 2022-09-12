// https://leetcode.cn/problems/dot-product-of-two-sparse-vectors/

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
const SparseVector = function (nums) {
  this.nums = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;

  for (let i = 0, len = this.nums.length; i < len; i++) {
    sum += this.nums[i] * vec.nums[i];
  }

  return sum;
};

// test cases
let v1 = new SparseVector([1, 0, 0, 2, 3]);
let v2 = new SparseVector([0, 3, 0, 4, 0]);
console.log(v1.dotProduct(v2));
