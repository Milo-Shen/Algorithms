use std::collections::{HashMap, HashSet};
use std::cell::RefCell;
use std::rc::Rc;
use Rust::ListNode;

pub struct FirstUnique {
    // 单链表按照插入顺序存放所有的 unique 元素
    // dummy.next 指向链表表头 head
    // dummy 节点的作用:
    //  1. dummy 点为头结点的前一个节点
    //  2. 如果没有 dummy 节点, 头结点就没有前一个节点
    //     而其他节点都有前一个节点, 所以需要分类讨论, 逻辑复杂
    pub dummy: ListNode,

    // 指向链表表尾的指针
    pub tail: Rc<RefCell<ListNode>>,

    // 数据值 => 数据节点之前的节点
    pub map_to_prev: HashMap<i32, ListNode>,

    // 存放重读出现过的数字 ( 出现次数 > 2 )
    pub duplicates: HashSet<i32>,
}

impl FirstUnique {
    pub fn new(nums: Vec<i32>) -> Self {
        let dummy = ListNode::new(0);
        Self {
            dummy,
            tail: Rc::new(RefCell::new(ListNode::new(0))),
            map_to_prev: HashMap::new(),
            duplicates: HashSet::new(),
        }
    }

    pub fn show_first_unique(&self) -> i32 {
        if self.dummy.next.is_some() {
            return self.dummy.next.as_ref().unwrap().borrow().val;
        }

        return -1;
    }

    pub fn add(&mut self, value: i32) {
        // 如果一个数字已经重复出现过 2 次, 忽略, 立即返回
        if self.duplicates.contains(&value) {
            return;
        }

        // 如果一个数字是第一次出现, 则加入链表, 并返回
        if !self.map_to_prev.contains_key(&value) {
            self.add_to_list_tail(value);
            return;
        }

        // 如果一个数字出现过 2 次, 则把这个数字从链表中移除
        self.remove(value);

        // 如果一个数字已经重复出现过 2 次, 则加入 duplicated
        self.duplicates.insert(value);
    }

    fn init_with_num(&mut self, nums: &Vec<i32>) {
        for &i in nums {
            self.add(i);
        }
    }

    fn add_to_list_tail(&mut self, num: i32) {}

    fn remove(&mut self, nums: i32) {}
}