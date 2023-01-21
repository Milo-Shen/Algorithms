// https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array/

const differenceOfSum = function (nums) {
  let num_sum = 0;
  let ele_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    ele_sum += num;
    while (num) {
      num_sum += num % 10;
      num = ~~(num / 10);
    }
  }

  return Math.abs(num_sum - ele_sum);
};

console.log(differenceOfSum([1, 15, 6, 3]));
