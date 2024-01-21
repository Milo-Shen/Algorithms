// https://leetcode.cn/problems/largest-divisible-subset/
// https://www.lintcode.com/problem/603

const largestDivisibleSubset = function (nums) {
  if (!nums || !nums.length) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  let dp = new Map();
  let prev = new Map();

  for (let num of nums) {
    dp.set(num, 1);
    prev.set(num, -1);
  }

  let last_num = nums[0];

  for (let num of nums) {
    for (let factor of getFactors(num)) {
      if (!dp.has(factor)) {
        continue;
      }

      if (dp.get(num) < dp.get(factor) + 1) {
        dp.set(num, dp.get(factor) + 1);
        prev.set(num, factor);
      }
    }

    if (dp.get(num) > dp.get(last_num)) {
      last_num = num;
    }
  }

  let answer = [];

  while (last_num !== -1) {
    answer.unshift(last_num);
    last_num = prev.get(last_num);
  }

  return answer;
};

const getFactors = function (num) {
  if (num === 1) {
    return [];
  }

  let factors = [];
  let factor = 1;

  while (factor * factor <= num) {
    if (num % factor === 0) {
      factors.push(factor);

      if (factor * factor !== num && factor !== 1) {
        factors.push(num / factor);
      }
    }

    factor += 1;
  }

  return factors;
};

console.log(largestDivisibleSubset([1, 2, 3]));
