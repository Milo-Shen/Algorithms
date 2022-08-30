// https://leetcode.cn/problems/plus-one/

mod solution_1;

fn main() {
    let digits = vec![1, 2, 3];
    let answer = solution_1::plus_one(digits);
    println!("answer = {:?}", answer);
}
