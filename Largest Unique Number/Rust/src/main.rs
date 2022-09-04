// https://leetcode.cn/problems/largest-unique-number/

mod solution_1;

fn main() {
    let nums = vec![11, 10, 11];
    let answer = solution_1::largest_unique_number(nums);
    println!("answer = {}", answer)
}
