// https://www.lintcode.com/problem/539/description
// https://leetcode-cn.com/problems/move-zeroes/

function move_zeroes(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return nums;
  }

  let fill_pointer = 0;
  let move_pointer = 0;

  while (move_pointer < nums_len) {
    if (nums[move_pointer] !== 0) {
      if (move_pointer !== fill_pointer) {
        nums[fill_pointer] = nums[move_pointer];
      }
      fill_pointer++;
    }
    move_pointer++;
  }

  for (let i = fill_pointer; i < nums_len; i++) {
    if (nums[i] !== 0) {
      nums[i] = 0;
    }
  }

  return nums;
}

console.log(move_zeroes([0, 1, 0, 3, 12]));
