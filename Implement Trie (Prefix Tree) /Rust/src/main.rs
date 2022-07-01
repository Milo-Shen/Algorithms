use Rust::{TrieNode, Trie};

fn main() {
    let mut trie = Trie::new();
    trie.insert(String::from("apple"));
    let answer = trie.search(String::from("apple"));
    println!("answer = {}", answer);
    let answer = trie.search(String::from("app"));
    println!("answer = {}", answer);
    let answer = trie.starts_with(String::from("app"));
    println!("answer = {}", answer);
    trie.insert(String::from("app"));
    let answer = trie.search(String::from("app"));
    println!("answer = {}", answer);
}