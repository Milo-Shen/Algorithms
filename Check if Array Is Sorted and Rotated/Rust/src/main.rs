// https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated/

mod solution_1;

fn main() {
    let nums = vec![3, 4, 5, 1, 2];
    let answer = solution_1::check(nums);
    println!("answer = {}", answer);
}
