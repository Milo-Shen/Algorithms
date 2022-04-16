// https://leetcode-cn.com/problems/sum-of-unique-elements/

function sumOfUnique(nums) {
  let hash = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    let val = nums[i];
    hash[val] = (hash[val] || 0) + 1;
  }

  let total = 0;
  for (let i in hash) {
    let count = hash[i];
    if (count === 1) {
      total += ~~i;
    }
  }

  return total;
}

console.log(sumOfUnique([1, 2, 3, 2]));
