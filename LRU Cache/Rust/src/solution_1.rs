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
    fn new(key: i32, val: i32) -> Self {
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
        let node = LinkedNode::new(-1, -1);
        let dummy = Rc::new(RefCell::new(node));
        let tail = Rc::clone(&dummy);

        LRUCache {
            capacity,
            dummy,
            tail,
            key_to_prev: HashMap::new(),
        }
    }

    pub fn get(&mut self, key: i32) -> i32 {
        // 如果这个 key 根本不存在于缓存, 返回 -1
        if !self.key_to_prev.contains_key(&key) {
            return -1;
        }

        // 这个 key 刚刚被访问过, 因此该节点应当被移动到链表尾部
        self.kick(key);

        // 这个节点被移动到了链表尾部, 成为了 tail 节点, 返回 tail 的值
        self.tail.borrow().val
    }

    pub fn put(&mut self, key: i32, value: i32) {
        // 如果 key 已经存在, 更新 key node 的 value
        if self.key_to_prev.contains_key(&key) {
            // 把该节点放到链表尾部
            self.kick(key);

            // 更新 key 节点 ( key 节点移动到了尾部, 就是 tail 节点的值 )
            self.tail.borrow_mut().val = value;
            return;
        }

        // 如果 key 不存在, 则在链表尾部存入节点
        let node = LinkedNode::new(key, value);
        self.push_back(Rc::new(RefCell::new(node)));

        // 如果 cache 超出上限, 淘汰表头, key_to_prev 的 length 就是链表长度
        if self.key_to_prev.len() as i32 > self.capacity {
            self.pop_front();
        }
    }

    fn push_back(&mut self, node: Rc<RefCell<LinkedNode>>) {
        // 当前的 tail 成为 node 的前一个节点
        self.key_to_prev
            .insert(node.borrow().key, Rc::clone(&self.tail));
        self.tail.borrow_mut().next = Some(node);

        // todo: 此处如何去除 clone ?
        let next = self.tail.borrow().next.clone().unwrap();
        self.tail = next;
    }

    fn pop_front(&mut self) {
        // 需要被删除的头部节点
        let head = self.dummy.borrow().next.clone().unwrap();
        let head_key = head.borrow().key;
        let head_next = head.borrow().next.clone();

        // 把删除节点的映射关系从 key_to_prev 中删除
        self.key_to_prev.remove(&head_key);

        // dummy 后移, 新的 dummy 的 next 指向新的头节点
        self.dummy.borrow_mut().next = head_next;

        // 在 key_to_prev 中更新新的头节点的映射关系
        let next_key = head.borrow().next.clone().unwrap().borrow().key;
        self.key_to_prev.insert(next_key, Rc::clone(&self.dummy));
    }

    fn kick(&mut self, key: i32) {
        // key 节点前面的节点
        let prev = self.key_to_prev.get(&key).unwrap();
        // 包含 key 的节点
        let key_node = prev.borrow().next.clone().unwrap();

        // 如果 key 所对应的点已经在链表尾, 则无需移动
        if key_node.borrow().key == self.tail.borrow().key {
            return;
        }

        // 从链表中删除 key 节点, 一共有 3 步 :
        // 1. key node 前面的节点指向 key node 的下一个节点 ( 跳过 key node )
        let next_key = key_node.borrow().next.as_ref().unwrap().borrow().key;
        prev.borrow_mut().next = key_node.borrow().next.clone();
        // 2. 更新 key node 的下一个节点所对应的前导点为 prev
        self.key_to_prev.insert(next_key, Rc::clone(prev));
        // 3. 断开 key node 指向 key node 的下一个节点的链接
        key_node.borrow_mut().next = None;

        self.push_back(key_node)
    }
}
