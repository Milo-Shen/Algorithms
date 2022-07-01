// https://www.lintcode.com/problem/442/
// https://leetcode.cn/problems/implement-trie-prefix-tree/

use std::collections::HashMap;

// 字典树的节点的定义
pub struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_word: bool,
    word: Option<String>,
    prefix_count: i32,
}

impl TrieNode {
    pub fn new() -> Self {
        Self {
            children: HashMap::new(),
            is_word: false,
            word: None,
            prefix_count: 0,
        }
    }
}

// Trie 字典树的定义
pub struct Trie {
    root: TrieNode,
}

impl Trie {
    pub fn new() -> Self {
        Self {
            root: TrieNode::new()
        }
    }

    pub fn insert(&mut self, word: String) {
        let mut node = &mut self.root;

        // 插入单词到字典树
        let word_arr: Vec<char> = word.chars().collect();

        // 循环插入单词
        for letter in word_arr {
            if !node.children.contains_key(&letter) {
                node.children.insert(letter, TrieNode::new());
            }

            // 移动到下一个 TireNode, 并且前缀数量 + 1
            node = node.children.get_mut(&letter).unwrap();
            node.prefix_count = node.prefix_count + 1;
        }

        // 单词结尾，记录单词信息
        node.is_word = true;
        node.word = Some(word);
    }

    pub fn search(&mut self, word: String) -> bool {
        let mut node = &mut self.root;

        // 遍历 prefix 中的字符
        let word_arr: Vec<char> = word.chars().collect();
        for letter in word_arr {
            if !node.children.contains_key(&letter) {
                return false;
            }

            // 移动到下一个 TireNode, 并且前缀数量 + 1
            node = node.children.get_mut(&letter).unwrap();
        }

        node.is_word
    }

    pub fn starts_with(&mut self, prefix: String) -> bool {
        let mut node = &mut self.root;

        // 遍历 prefix 中的字符
        let prefix_arr: Vec<char> = prefix.chars().collect();
        for letter in prefix_arr {
            if !node.children.contains_key(&letter) {
                return false;
            }

            // 移动到下一个 TireNode, 并且前缀数量 + 1
            node = node.children.get_mut(&letter).unwrap();
        }

        true
    }
}