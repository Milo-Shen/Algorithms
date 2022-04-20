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

pub fn build_binary_tree(nums: Vec<Option<i32>>) -> Option<Rc<RefCell<TreeNode<i32>>>> {
    let nums_len = nums.len();
    if nums_len == 0 {
        return None;
    }

    let root_node: TreeNode<i32> = TreeNode::new(nums[0].unwrap());
    let root_node_rc = Rc::new(RefCell::new(root_node));
    let mut queue = VecDeque::from([Rc::clone(&root_node_rc)]);

    let mut i = 1;
    while i < nums_len {
        if let Some(mut node) = queue.pop_front() {
            if let Some(num) = nums[i] {
                let new_node: Rc<RefCell<TreeNode<i32>>> = Rc::new(RefCell::new(TreeNode::new(num)));
                (*node.borrow_mut()).left = Some(Rc::clone(&new_node));
                queue.push_back(Rc::clone(&new_node));
            }

            if let Some(num) = nums[i + 1] {
                let new_node: Rc<RefCell<TreeNode<i32>>> = Rc::new(RefCell::new(TreeNode::new(num)));
                (*node.borrow_mut()).right = Some(Rc::clone(&new_node));
                queue.push_back(Rc::clone(&new_node));
            }
        }
        i = i + 2;
    }

    Some(root_node_rc)
}
