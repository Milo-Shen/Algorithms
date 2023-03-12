// https://leetcode.cn/problems/jump-game-iv/

mod solution_1;

fn main() {
    let nums = vec![100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
    let answer = solution_1::min_jumps(nums);
    println!("answer = {}", answer);
}
