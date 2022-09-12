// https://leetcode.cn/problems/dot-product-of-two-sparse-vectors/

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
const SparseVector = function (nums) {
  this.map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    let num = nums[i];
    if (num === 0) continue;

    this.map.set(i, num);
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;

  for (let [key, v1] of this.map) {
    let v2 = vec.map.get(key) || 0;
    sum += v1 * v2;
  }

  return sum;
};

// test cases
let v1 = new SparseVector([1, 0, 0, 2, 3]);
let v2 = new SparseVector([0, 3, 0, 4, 0]);
console.log(v1.dotProduct(v2));
