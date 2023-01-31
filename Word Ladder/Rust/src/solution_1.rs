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
    // let word_dict: HashSet<String> = HashSet::from_iter(word_list);
    let word_dict: HashSet<String> = word_list.iter().cloned().collect();
    if !word_dict.contains(&end_word) {
        return 0;
    }

    // 最短路径 & 缓存
    let mut distance = 1;
    let mut next_word_cache: HashMap<String, Vec<String>> = HashMap::new();

    // 双向宽度优先搜索
    let mut forward_queue = VecDeque::from([begin_word.clone()]);
    let mut forward_set = HashSet::from([begin_word]);
    let mut backward_queue = VecDeque::from([end_word.clone()]);
    let mut backward_set = HashSet::from([end_word]);

    while !forward_queue.is_empty() && !backward_queue.is_empty() {
        distance += 1;
        if extend_queue(&mut forward_queue, &mut forward_set, &backward_set, &word_dict, &mut next_word_cache) {
            return distance;
        }

        distance += 1;
        if extend_queue(&mut backward_queue, &mut backward_set, &forward_set, &word_dict, &mut next_word_cache) {
            return distance;
        }
    }

    0
}

fn extend_queue(
    queue: &mut VecDeque<String>,
    visited: &mut HashSet<String>,
    opposite_visited: &HashSet<String>,
    word_dict: &HashSet<String>,
    cache: &mut HashMap<String, Vec<String>>,
) -> bool {
    let len = queue.len();

    for i in 0..len {
        let word = queue.pop_front().unwrap();

        // 对下一层单词进行 BFS
        let next_words = get_next_words(word_dict, &word, cache);

        for next_word in next_words {
            if visited.contains(&next_word) {
                continue;
            }

            if opposite_visited.contains(&next_word) {
                return true;
            }

            queue.push_back(next_word.clone());
            visited.insert(next_word);
        }
    }
    
    false
}

fn get_next_words(word_dict: &HashSet<String>, word: &String, cache: &mut HashMap<String, Vec<String>>) -> Vec<String> {
    if cache.contains_key(word) {
        return cache.get(word).unwrap().clone();
    }

    let word_char_arr: Vec<char> = word.chars().collect();
    let mut next_words = Vec::new();

    for ch in 'a'..='z' {
        for j in 0..word.len() {
            if ch == word_char_arr[j] {
                continue;
            }

            let next_word = (&word[0..j]).to_string() + &(ch.to_string()) + &word[(j + 1)..];
            if word_dict.contains(&next_word) {
                next_words.push(next_word);
            }
        }
    }

    cache.insert(word.clone(), next_words.clone());

    next_words
}