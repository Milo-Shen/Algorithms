// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
// https://www.lintcode.com/problem/249/

const countSmaller = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
};

console.log(countSmaller([5, 2, 6, 1]));
