use Rust::{Trie, TrieNode};

pub struct WordDictionary {
    trie: Trie,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl WordDictionary {
    pub fn new() -> Self {
        Self {
            trie: Trie::new()
        }
    }

    pub fn add_word(&mut self, word: String) {
        self.trie.insert(word);
    }

    pub fn search(&self, word: String) -> bool {
        let word_arr: Vec<char> = word.chars().collect();

        dfs(self.trie.get_root(), &word_arr, word_arr.len(), 0)
    }
}

fn dfs(root: &TrieNode, word: &Vec<char>, word_len: usize, index: usize) -> bool {
    if index == word_len {
        return root.is_word;
    }

    let letter = word[index];

    if letter == '.' {
        for (_, child) in &root.children {
            if dfs(child, word, word_len, index + 1) {
                return true;
            }
        }

        return false;
    }

    if root.children.contains_key(&letter) {
        return dfs(root.children.get(&letter).unwrap(), word, word_len, index + 1);
    }

    false
}