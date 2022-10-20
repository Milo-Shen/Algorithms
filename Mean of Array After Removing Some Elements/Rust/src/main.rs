// https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/

mod solution_1;

fn main() {
    let nums = vec![6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0];
    let answer = solution_1::trim_mean(nums);
    println!("answer = {}", answer);
}
