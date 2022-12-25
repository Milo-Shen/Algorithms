// https://www.lintcode.com/problem/604/

function winSum(nums, k) {
  if (!nums || !nums.length) {
    return [];
  }

  let answer = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }

    answer.push(sum);
  }

  return answer;
}

console.log(winSum([], 0));
