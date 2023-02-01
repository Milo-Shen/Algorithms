// https://leetcode-cn.com/problems/word-ladder/
//  beginWord 不需要在 wordList 中, 这个和 lint-code 上的不一样

mod solution_1;
mod solution_2;

fn main() {
    let begin_word = String::from("hit");
    let end_word = String::from("cog");
    let word_list = vec![
        String::from("hot"), String::from("dot"), String::from("dog"),
        String::from("lot"), String::from("log"), String::from("cog"),
    ];
    let answer = solution_1::ladder_length(begin_word.clone(), end_word.clone(), word_list.clone());
    println!("answer = {}", answer);

    let answer = solution_2::ladder_length(begin_word.clone(), end_word.clone(), word_list.clone());
    println!("answer = {}", answer);
}