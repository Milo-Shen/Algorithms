// https://leetcode.cn/problems/jump-game-vi/

mod solution_1;

fn main() {
    let nums = vec![10, -5, -2, 4, 0, 3];
    let answer = solution_1::max_result(nums, 2);
    println!("answer = {}", answer);
}
