use std::rc::Rc;
use std::cell::RefCell;
use std::cmp::max;
use binary_tree::TreeNode;

pub fn diameter_of_binary_tree(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    let mut max = i32::MIN;

    depth(root, &mut max);

    // 直径长度 = 经过的结点数最大值 - 1
    max - 1
}

fn depth(root: Option<Rc<RefCell<TreeNode<i32>>>>, val: &mut i32) -> i32 {
    if root.is_none() {
        return 0;
    }

    let left = depth(root.as_ref().unwrap().borrow_mut().left.take(), val);
    let right = depth(root.as_ref().unwrap().borrow_mut().right.take(), val);

    // 经过的结点数 = 某个结点左子树深度 + 右子树深度 + 1 (此节点本身)
    // 当前经过的结点数最大值 = Math.max(当前经过的结点数, 上一轮经过的结点数最大值)
    *val = max(left + right + 1, *val);
    max(left, right) + 1
}