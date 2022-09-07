use rust::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

#[derive(Debug)]
pub struct BSTIterator {
    stack: Vec<Rc<RefCell<TreeNode<i32>>>>,
}

impl BSTIterator {
    pub fn new(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Self {
        let mut stack = Vec::new();

        // 特殊情况处理
        if root.is_none() {
            return Self { stack };
        }

        let mut cur_node = root;

        while cur_node.is_some() {
            if let Some(node) = cur_node {
                cur_node = node.borrow_mut().left.take();
                stack.push(node);
            }
        }

        Self { stack }
    }

    pub fn next(&self) -> i32 {
        if self.stack.is_empty() {
            return i32::MIN;
        }

        let cur_node = &self.stack[self.stack.len() - 1];
        // let cur_node = self.stack[self.stack.len() - 1];

        -1
    }

    pub fn has_next(&self) -> bool {
        !self.stack.is_empty()
    }
}
