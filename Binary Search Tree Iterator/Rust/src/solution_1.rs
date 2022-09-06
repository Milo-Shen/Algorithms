use std::cell::RefCell;
use std::rc::Rc;
use rust::TreeNode;

#[derive(Debug)]
pub struct BSTIterator {}

impl BSTIterator {

    pub fn new(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Self {
        Self{}
    }

    pub fn next(&self) -> i32 {
        -1
    }

    pub fn has_next(&self) -> bool {
        false
    }
}
