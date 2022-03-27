pub fn solution(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    if nums_len == 0 {
        return vec![-1, -1];
    }

    let mut sorted_arr: Vec<(i32, i32)> = Vec::new();
    for (index, &val) in nums.iter().enumerate() {
        sorted_arr.push((val, index as i32))
    }
    sorted_arr.sort();

    let mut left = 0;
    let mut right = nums_len - 1;
    while left < right {
        let left_tuple = sorted_arr[left];
        let right_tuple = sorted_arr[right];
        let sum = left_tuple.0 + right_tuple.0;
        if sum > target {
            right = right - 1;
        } else if sum < target {
            left = left + 1;
        } else {
            let mut result = vec![left_tuple.1, right_tuple.1];
            result.sort();
            return result;
        }
    }

    vec![-1, -1]
}