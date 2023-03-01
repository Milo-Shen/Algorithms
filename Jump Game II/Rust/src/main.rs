// https://leetcode.cn/problems/jump-game-ii/

// dp[i] 记为到达位置i的最小跳数
// dp[i] = min{dp[i-1], dp[i-2],...} + 1 条件是 dp[i-1], dp[i-2]...能到 dp[i]
// 反过来 dp[i] 跳一次距离可以到达的位置为 i + ( 0 ~ nums[i] ) 中记为 m 若 dp[m] > dp[i]+1 则更新 dp[m]

mod solution_1;

fn main() {
    let nums = vec![2, 3, 1, 1, 4];
    println!("answer = {}", solution_1::jump(nums));
}
