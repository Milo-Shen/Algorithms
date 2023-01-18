// https://leetcode.cn/problems/concatenation-of-array/

const getConcatenation = function (nums) {
  let len = nums.length;
  let answer = [];

  for (let i = 0; i < 2 * len; i++) {
    answer[i] = nums[i % len];
  }

  return answer;
};

console.log(getConcatenation([1, 2, 1]));
