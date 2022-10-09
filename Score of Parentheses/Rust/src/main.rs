// https://leetcode.cn/problems/score-of-parentheses/

mod solution_1;

fn main() {
    let answer = solution_1::score_of_parentheses(String::from("(()(()))"));
    println!("answer = {}", answer);
}
