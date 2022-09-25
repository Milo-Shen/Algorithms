// https://www.lintcode.com/problem/134
// https://leetcode.cn/problems/lru-cache/
// https://leetcode.cn/problems/lru-cache-lcci/
// https://leetcode.cn/problems/OrIXps/

struct LinkedNode {
    key: i32,
    val: i32,
    next: Option<Box<LinkedNode>>,
}

pub struct LRUCache<'a> {
    // Cache 的最大容量, 超过容量就需要淘汰数据
    capacity: i32,
    // 单链表 dummy 头
    dummy: LinkedNode,
    // 单链表的尾节点
    tail: &'a Option<Box<LinkedNode>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl<'a> LRUCache<'a> {
    pub fn new(capacity: i32) -> Self {
        LRUCache {
            capacity,
            dummy: todo!(),
            tail: todo!(),
        }
    }

    pub fn get(&self, key: i32) -> i32 {
        -1
    }

    pub fn put(&self, key: i32, value: i32) {}
}
