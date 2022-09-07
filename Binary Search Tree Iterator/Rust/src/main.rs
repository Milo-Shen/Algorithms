// https://leetcode-cn.com/problems/kTOapQ/submissions/
// https://leetcode-cn.com/problems/binary-search-tree-iterator/submissions/
// https://www.lintcode.com/problem/86/

use rust::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(7), Some(3), Some(15), None, None, Some(9), Some(20)];
    let root_node = build_binary_tree(nums);
    let mut bst_iterator = solution_1::BSTIterator::new(root_node);
    println!("answer = {:?}", bst_iterator.next());
    println!("answer = {:?}", bst_iterator.next());
    println!("answer = {:?}", bst_iterator.next());
    println!("answer = {:?}", bst_iterator.next());
    println!("answer = {:?}", bst_iterator.next());
}
