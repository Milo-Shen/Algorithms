// https://leetcode.cn/problems/min-stack/

use std::cmp::min;

pub struct MinStack {
    stack: Vec<i32>,
    min_stack: Vec<i32>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {
    pub fn new() -> Self {
        MinStack {
            stack: Vec::new(),
            min_stack: vec![i32::MAX],
        }
    }

    pub fn push(&mut self, val: i32) {
        self.stack.push(val);
        let last = *self.min_stack.last().unwrap();
        let min_value = min(last, val);
        self.min_stack.push(min_value);
    }

    pub fn pop(&mut self) {
        self.stack.pop();
        self.min_stack.pop();
    }

    pub fn top(&self) -> i32 {
        *self.stack.last().unwrap()
    }

    pub fn get_min(&self) -> i32 {
        *self.min_stack.last().unwrap()
    }
}
