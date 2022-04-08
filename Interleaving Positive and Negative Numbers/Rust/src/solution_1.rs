pub fn re_range(nums: Vec<i32>) -> Vec<i32> {
    let nums_len = nums.len() as i32;
    if nums_len == 0 {
        return vec![];
    }

    let mut nums = nums;
    let neg_count = partition(&mut nums);
    let pos_count = nums_len - neg_count;
    let left = if neg_count > pos_count { 1 } else { 0 };
    let right = nums_len - (if neg_count < pos_count { 2 } else { 1 });
    inter_leave(&mut nums, left, right);

    nums
}

fn partition(nums: &mut Vec<i32>) -> i32 {
    let mut left = 0;
    let mut right = (nums.len() - 1) as i32;

    while left <= right {
        while left <= right && nums[left as usize] < 0 {
            left = left + 1;
        }

        while left <= right && nums[right as usize] > 0 {
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

    left
}

fn inter_leave(nums: &mut Vec<i32>, mut left: i32, mut right: i32) {
    while left <= right {
        let temp = nums[left as usize];
        nums[left as usize] = nums[right as usize];
        nums[right as usize] = temp;
        left = left + 2;
        right = right - 2;
    }
}