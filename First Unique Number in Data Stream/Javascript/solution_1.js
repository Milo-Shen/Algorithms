// https://www.lintcode.com/problem/685

function firstUniqueNumber(nums, number) {
  // 特殊情况处理
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return -1;
  }

  let map = new Map();

  for (let i = 0; i < nums_len; i++) {
    let num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    if (num === number) {
      break;
    }
  }

  if (!map.has(number)) {
    return -1;
  }

  for (let i = 0; i < nums_len; i++) {
    if (map.get(nums[i]) === 1) {
      return nums[i];
    }
  }

  return -1;
}

// test cases
let nums = [1, 2, 2, 1, 3, 4, 4, 5, 6];
console.log(firstUniqueNumber(nums, 5));
