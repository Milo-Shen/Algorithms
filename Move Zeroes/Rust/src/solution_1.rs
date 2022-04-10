// https://www.lintcode.com/problem/539/description
// https://leetcode-cn.com/problems/move-zeroes/

pub fn move_zeroes(nums: &mut Vec<i32>) {
    let nums_len = nums.len();
    if nums_len == 0 {
        return;
    }

    let mut fill_pointer = 0;
    let mut move_pointer = 0;

    while move_pointer < nums_len {
        if nums[move_pointer] != 0 {
            if move_pointer != fill_pointer {
                let temp = nums[fill_pointer];
                nums[fill_pointer] = nums[move_pointer];
                nums[move_pointer] = temp;
            }
            fill_pointer = fill_pointer + 1;
        }
        move_pointer = move_pointer + 1;
    }
}