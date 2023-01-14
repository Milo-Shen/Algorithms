// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = function (nums) {
  const n = nums.length;

  const data = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  for (let i = 0; i < n; ++i) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }

  data.sort((a, b) => a[0] - b[0]);

  const result = new Array(n);
  let prev = -1;

  for (let i = 0; i < n; ++i) {
    if (prev === -1 || data[i][0] !== data[i - 1][0]) {
      prev = i;
    }

    result[data[i][1]] = prev;
  }

  return result;
};

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
