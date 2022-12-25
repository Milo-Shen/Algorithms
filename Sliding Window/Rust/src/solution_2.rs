// https://www.lintcode.com/problem/604/

pub fn win_sum(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let k = k as usize;
    let mut answer = Vec::new();
    let nums_len = nums.len();

    if nums_len == 0 {
        return answer;
    }

    for i in 0..nums_len - k + 1 {
        answer.push(0);
    }

    let mut j = 0;
    let mut sum = 0;

    for i in 0..nums_len {
        while j < nums_len && j - i < k {
            sum += nums[j];
            j += 1;
        }

        if j - i == k {
            answer[i] = sum
        }

        sum -= nums[i];
    }

    answer
}