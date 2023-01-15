// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
// https://www.lintcode.com/problem/249/

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![5, 2, 6, 1];
    let answer = solution_1::count_smaller(nums);
    println!("answer = {:?}", answer);

    let nums = vec![5, 2, 6, 1];
    let answer = solution_2::count_smaller(nums);
    println!("answer = {:?}", answer);
}
