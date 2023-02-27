// https://leetcode.cn/problems/jump-game/
// https://www.lintcode.com/problem/116/description

mod solution_1;

fn main() {
    let nums = vec![2, 3, 1, 1, 4];
    println!("answer = {}", solution_1::can_jump(nums));
}
