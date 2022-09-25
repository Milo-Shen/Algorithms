// https://www.lintcode.com/problem/134
// https://leetcode.cn/problems/lru-cache/
// https://leetcode.cn/problems/lru-cache-lcci/
// https://leetcode.cn/problems/OrIXps/

struct LinkedNode {
    key: i32,
    val: i32,
    next: Option<Box<LinkedNode>>,
}

pub struct LRUCache {}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LRUCache {
    pub fn new(capacity: i32) -> Self {
        LRUCache {}
    }

    pub fn get(&self, key: i32) -> i32 {
        -1
    }

    pub fn put(&self, key: i32, value: i32) {}
}
