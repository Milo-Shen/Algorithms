// https://leetcode.cn/problems/reverse-words-in-a-string-iii/

mod solution_1;

fn main() {
    let s = String::from("Let's take Apple contest");
    let answer = solution_1::reverse_words(s);
    println!("answer = {}", answer);
}
