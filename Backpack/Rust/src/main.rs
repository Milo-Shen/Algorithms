// https://www.lintcode.com/problem/92/

// 0,1 背包 - 第一种状态表示
//
// 状态 state
// 1. dp[i][j] 表示前 i 个数里挑若干个数是否能组成和为
//
// 方程 function
// 1. dp[i][j] = dp[i - 1][j] or dp[i - 1][j - A[i - 1]]  如果 j >= A[i - 1]
// 2. dp[i][j] = dp[i - 1][j] 如果  j < A[i - 1]
// 3. 第 i 个数的下标是 i - 1，所以用的是 A[i - 1] 而不是 A[i]
//
// 初始化 initialization
// 1. dp[0][0] = true
// 2. dp[0][1...m] = false
//
// 答案 answer
// 1. 使得 dp[n][v], 0 <= v <= m 为 true 的最大 v

mod solution_1;

fn main() {
    let answer = solution_1::back_pack(10, vec![3, 4, 8, 5]);
    println!("answer = {}", answer);
}
