// https://www.lintcode.com/problem/604/

function winSum(nums, k) {
  let nums_len = nums.length;

  if (!nums || !nums_len) {
    return [];
  }

  let answer = [];

  let j = 0;
  let sum = 0;

  for (let i = 0; i < nums_len; i++) {
    while (j < nums_len && j - i < k) {
      sum += nums[j];
      j++;
    }

    if (j - i === k) {
      answer[i] = sum;
    }

    sum -= nums[i];
  }

  return answer;
}

console.log(winSum([1, 2, 7, 8, 5], 3));
