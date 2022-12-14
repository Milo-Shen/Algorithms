// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// https://www.lintcode.com/problem/521/description

mod solution_1;

fn main() {
    let mut nums = vec![0, 1, 1, 1, 2, 2, 3];
    let answer = solution_1::remove_duplicates(&mut nums);
    println!("answer = {}", answer);
}
