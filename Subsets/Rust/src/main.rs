// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

mod solution_1;
mod solution_2;
mod solution_3;
mod solution_4;

fn main() {
    // 第一种搜索树 ( 选, 不选的搜索树 )
    // DFS 的解法
    let nums = vec![1, 2, 3];
    let answer_1 = solution_1::subsets(nums);
    println!("answer_1 = {:?}", answer_1);

    // 第一种搜索树 ( 选, 不选的搜索树 )
    // BFS 的解法
    let nums = vec![1, 2, 3];
    let answer_1 = solution_2::subsets(nums);
    println!("answer_2 = {:?}", answer_1);

    // 第二种搜索树
    // DFS 的解法
    let nums = vec![1, 2, 3];
    let answer_2 = solution_3::subsets(nums);
    println!("answer_3 = {:?}", answer_2);

    // 第二种搜索树
    // BFS 的解法
    let nums = vec![1, 2, 3];
    let answer_2 = solution_4::subsets(nums);
    println!("answer_4 = {:?}", answer_2);
}
