mod solution;

fn main() {
    let word = String::from("leetcode");
    let word_dict = vec![String::from("leet"), String::from("code")];
    let answer = solution::word_break(word, word_dict);
    println!("answer = {}", answer);
}
