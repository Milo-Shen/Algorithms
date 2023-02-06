// https://www.lintcode.com/problem/121/
// https://leetcode.cn/problems/word-ladder-ii/

use std::collections::{HashMap, HashSet, VecDeque};

pub fn find_ladders(begin_word: String, end_word: String, word_list: Vec<String>) -> Vec<Vec<String>> {
    Vec::new()
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