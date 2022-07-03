// https://www.lintcode.com/problem/960
// https://leetcode.cn/problems/first-unique-number/

use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug, PartialEq, Eq)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Rc<RefCell<ListNode>>>,
}