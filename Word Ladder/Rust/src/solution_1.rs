use std::collections::{HashMap, HashSet};

pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
    // 对异常进行处理
    let list_len = word_list.len();
    let hash: HashMap<String, Vec<char>> = HashMap::new();

    // 记录层的深度, 初始值为 0
    let count = 0;
    let queue = vec![&begin_word];
    let set = HashSet::from([&begin_word]);
    let a = set.get(&begin_word).unwrap();
    println!("{:?}", a == String::from("@"));

    0
}