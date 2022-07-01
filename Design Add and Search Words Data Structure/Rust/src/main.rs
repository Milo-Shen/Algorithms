mod solution;

fn main() {
    let mut word_dictionary = solution::WordDictionary::new();
    word_dictionary.add_word(String::from("bad"));
    word_dictionary.add_word(String::from("dad"));
    word_dictionary.add_word(String::from("mad"));
    let answer = word_dictionary.search(String::from("pad")); // 返回 False
    println!("answer = {}", answer);
    let answer = word_dictionary.search(String::from("bad")); // 返回 True
    println!("answer = {}", answer);
    let answer = word_dictionary.search(String::from(".ad")); // 返回 True
    println!("answer = {}", answer);
    let answer = word_dictionary.search(String::from("b..")); // 返回 True
    println!("answer = {}", answer);
}
