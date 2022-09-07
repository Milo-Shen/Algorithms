use rust::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

// 一种更简单的实现方式
// 在 stack 中不保存那些已经被 iterator 访问过的节点
// 如果 iterator 到了这个节点, 即便右子树还未完全遍历, 也从 stack 里踢出
#[derive(Debug, PartialEq, Eq)]
pub struct BSTIterator {
    stack: Vec<Option<Rc<RefCell<TreeNode<i32>>>>>,
}

impl BSTIterator {
    pub fn new(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Self {
        BSTIterator { stack: vec![root] }
    }

    pub fn next(&mut self) -> i32 {
        let mut node = self.stack.pop().unwrap();
        while node.is_some() || !self.stack.is_empty() {
            while let Some(cur) = node {
                let left = cur.borrow_mut().left.take();
                self.stack.push(Some(cur));
                node = left;
            }

            if let Some(top) = self.stack.pop() {
                if let Some(cur) = top {
                    node = cur.borrow_mut().right.take();
                    if node.is_some() {
                        self.stack.push(node);
                    }
                    return cur.borrow().val;
                }
            }
        }
        return -1;
    }

    pub fn has_next(&self) -> bool {
        !self.stack.is_empty()
    }
}
