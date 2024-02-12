use std::mem::transmute;

pub fn length_of_lis(nums: Vec<i32>) -> i32 {
    let n = nums.len();

    if n == 0 {
        return 0;
    }

    let mut lis = vec![i32::MAX; n + 1];
    lis[0] = i32::MIN;

    let mut longest = 0;
    for &num in &nums {
        let index = first_gte(&lis, n + 1, num);
        lis[index] = num;
        longest = longest.max(index);
    }

    longest as i32
}

fn first_gte(nums: &Vec<i32>, len: usize, target: i32) -> usize {
    let mut start = 0;
    let mut end = len - 1;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if nums[mid] >= target {
            end = mid;
        } else {
            start = mid;
        }
    }

    if nums[start] >= target {
        return start;
    }

    return end;
}
