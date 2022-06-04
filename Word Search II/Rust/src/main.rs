// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search-ii/

mod solution;

fn main() {
    // test cases
    let boards = vec![
        vec!['o', 'a', 'a', 'n'],
        vec!['e', 't', 'a', 'e'],
        vec!['i', 'h', 'k', 'r'],
        vec!['i', 'f', 'l', 'v'],
    ];
    let words = vec![
        String::from("oath"),
        String::from("pea"),
        String::from("eat"),
        String::from("rain"),
    ];
    let answer = solution::find_words(boards, words);
    println!("answer = {:?}", answer);
}
