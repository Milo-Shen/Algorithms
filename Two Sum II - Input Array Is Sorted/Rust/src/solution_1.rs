// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
    let mut i = 0;
    let mut j = numbers.len() - 1;
    let mut result = Vec::with_capacity(2);

    while i < j {
        let sum = numbers[i] + numbers[j];
        if sum > target {
            j -= 1;
        } else if sum < target {
            i += 1;
        } else {
            result.push((i + 1) as i32);
            result.push((j + 1) as i32);
            break;
        }
    }

    result
}