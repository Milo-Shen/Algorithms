// https://www.lintcode.com/problem/134
// https://leetcode.cn/problems/lru-cache/
// https://leetcode.cn/problems/lru-cache-lcci/
// https://leetcode.cn/problems/OrIXps/

use std::cell::RefCell;
use std::collections::HashMap;
use std::rc::Rc;

struct LinkedNode {
    key: i32,
    val: i32,
    next: Option<Rc<RefCell<LinkedNode>>>,
}

impl LinkedNode {
    fn new(key: i32, val: i32, next: Option<Box<LinkedNode>>) -> Self {
        Self {
            key,
            val,
            next: None,
        }
    }
}

pub struct LRUCache {
    // Cache 的最大容量, 超过容量就需要淘汰数据
    capacity: i32,
    // 单链表 dummy 头
    dummy: Rc<RefCell<LinkedNode>>,
    // 单链表的尾节点
    tail: Rc<RefCell<LinkedNode>>,
    // 存储映射关系: key => key 所对应数据节点之前的节点
    key_to_prev: HashMap<i32, Rc<RefCell<LinkedNode>>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LRUCache {
    pub fn new(capacity: i32) -> Self {
        let node = LinkedNode::new(-1, -1, None);
        let dummy = Rc::new(RefCell::new(node));
        let tail = Rc::clone(&dummy);

        LRUCache {
            capacity,
            dummy,
            tail,
            key_to_prev: HashMap::new(),
        }
    }

    pub fn get(&self, key: i32) -> i32 {
        // 如果这个 key 根本不存在于缓存, 返回 -1
        if self.key_to_prev.contains_key(&key) {
            return -1;
        }

        // 这个 key 刚刚被访问过, 因此该节点应当被移动到链表尾部
        self.kick(key);

        // 这个节点被移动到了链表尾部, 成为了 tail 节点, 返回 tail 的值
        self.tail.borrow().val
    }

    pub fn put(&self, key: i32, value: i32) {}

    fn kick(&self, key: i32) {}

    fn push_back(&mut self, node: Rc<RefCell<LinkedNode>>) {
        // 当前的 tail 成为 node 的前一个节点
        self.key_to_prev
            .insert(node.borrow().key, Rc::clone(&self.tail));
        self.tail.borrow_mut().next = Some(node);

        let next = self.tail.borrow_mut().next.take().unwrap();
        self.tail = next;
    }
}
