// https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array/

pub fn difference_of_sum(nums: Vec<i32>) -> i32 {
    let mut num_sum = 0;
    let mut ele_sum = 0;

    for &num in nums.iter() {
        let mut num = num;
        ele_sum += num;
        while num != 0 {
            num_sum += num % 10;
            num = num / 10;
        }
    }

    return (num_sum - ele_sum).abs();
}