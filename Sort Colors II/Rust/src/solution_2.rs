// https://www.lintcode.com/problem/143/

// 采用快速排序的思想来进行排序
pub fn sort_colors2(nums: &mut Vec<i32>, k: i32) {
    let nums_len = nums.len();
    if nums_len == 0 {
        return;
    }

    partition_array(nums, 0, (nums_len - 1) as i32, 1, k);
}

fn partition_array(nums: &mut Vec<i32>, start: i32, end: i32, color_start: i32, color_end: i32) {
    if color_start == color_end {
        return;
    }

    let mut left = start;
    let mut right = end;

    let mid_color = (color_start + color_end) / 2;

    while left <= right {
        while left <= right && nums[left as usize] <= mid_color {
            left = left + 1;
        }

        while left <= right && nums[right as usize] > mid_color {
            right = right - 1;
        }

        if left <= right {
            let temp = nums[left as usize];
            nums[left as usize] = nums[right as usize];
            nums[right as usize] = temp;
            left = left + 1;
            right = right - 1;
        }
    }

    partition_array(nums, start, right, color_start, mid_color);
    partition_array(nums, left, end, mid_color + 1, color_end);
}