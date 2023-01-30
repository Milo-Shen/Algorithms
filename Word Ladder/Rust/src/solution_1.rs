// https://leetcode-cn.com/problems/word-ladder/
//  beginWord 不需要在 wordList 中, 这个和 lint-code 上的不一样

use std::collections::{HashMap, HashSet, VecDeque};

pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
    // 对异常进行处理
    let list_len = word_list.len();
    if list_len == 0 {
        return 0;
    }

    if begin_word == end_word {
        return 1;
    }

    // 将 word list 转换成 word dict
    let word_dict: HashSet<String> = HashSet::from_iter(word_list);
    if !word_dict.contains(&end_word) {
        return 0;
    }

    // 最短路径 & 缓存
    let mut distance = 1;
    let mut next_word_cache: HashMap<String, String> = HashMap::new();

    // 双向宽度优先搜索
    let forward_queue = VecDeque::from([begin_word]);
    let forward_set = HashSet::from([begin_word.clone()]);

    0
}