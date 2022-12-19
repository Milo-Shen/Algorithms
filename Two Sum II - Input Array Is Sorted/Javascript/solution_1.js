// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

const twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};

console.log(twoSum([-1, 0], -1));
