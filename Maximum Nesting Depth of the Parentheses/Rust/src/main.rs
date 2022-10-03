// https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/submissions/

mod solution_1;

fn main() {
    let answer = solution_1::max_depth(String::from("(1+(2*3)+((8)/4))+1"));
    println!("answer = {}", answer);
}
