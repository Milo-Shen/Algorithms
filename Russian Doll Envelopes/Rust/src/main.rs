// https://leetcode.cn/problems/russian-doll-envelopes/description/
mod solution_1;

fn main() {
    let nums = vec![vec![10, 8], vec![1, 12], vec![6, 15], vec![2, 18]];
    let answer = solution_1::max_envelopes(nums);
    println!("{}", answer);
}
