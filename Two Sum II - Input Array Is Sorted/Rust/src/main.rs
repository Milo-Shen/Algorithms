// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

mod solution_1;

fn main() {
    let nums = vec![-1, 0];
    let target = -1;
    let answer = solution_1::two_sum(nums, target);
    println!("answer = {:?}", answer);
}