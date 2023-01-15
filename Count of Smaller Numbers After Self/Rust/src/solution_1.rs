// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
// https://www.lintcode.com/problem/249/

pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut result = Vec::with_capacity(len);

    for i in 0..len {
        let mut count = 0;

        for j in (i + 1)..len {
            if nums[j] < nums[i] {
                count += 1;
            }
        }

        result.push(count);
    }

    result
}