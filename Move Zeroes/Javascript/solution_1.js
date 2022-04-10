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
        let temp = nums[fill_pointer];
        nums[fill_pointer] = nums[move_pointer];
        nums[move_pointer] = temp;
      }
      fill_pointer++;
    }
    move_pointer++;
  }

  return nums;
}

console.log(move_zeroes([0, 1, 0, 3, 12]));
