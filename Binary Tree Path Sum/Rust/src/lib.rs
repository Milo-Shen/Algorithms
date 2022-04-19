use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode<T> {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode<T>>>>,
    pub right: Option<Rc<RefCell<TreeNode<T>>>>,
}

impl<T> TreeNode<T> {
    pub fn new(val: i32) -> Self {
        Self {
            val,
            left: None,
            right: None,
        }
    }
}

pub fn build_binary_tree(nums: Vec<Option<i32>>) -> Option<TreeNode<i32>> {
    let nums_len = nums.len();
    if nums_len == 0 {
        return None;
    }

    let root: TreeNode<i32> = TreeNode::new(nums[0].unwrap());
    let queue = VecDeque::from([root]);

    None
}
