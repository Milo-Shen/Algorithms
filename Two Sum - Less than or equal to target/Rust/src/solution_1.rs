pub fn solution(nums: Vec<i32>, target: i32) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return 0;
    }

    let mut sorted_arr = nums;
    sorted_arr.sort();

    let mut count = 0;
    let mut left = 0;
    let mut right = nums_len - 1;

    while left < right {
        let sum = sorted_arr[left] + sorted_arr[right];
        if sum > target {
            right = right - 1;
        } else {
            count = count + right - left;
            left = left + 1;
        }
    }

    count as i32
}