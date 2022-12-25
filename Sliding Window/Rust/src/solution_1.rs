// https://www.lintcode.com/problem/604/

pub fn win_sum(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let mut answer = Vec::new();
    let nums_len = nums.len();

    if nums_len == 0 {
        return answer;
    }

    for i in 0..nums_len - k as usize + 1 {
        let mut sum = 0;

        for j in i..i + k as usize {
            sum += nums[j];
        }

        answer.push(sum);
    }

    answer
}