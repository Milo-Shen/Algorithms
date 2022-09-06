// https://leetcode-cn.com/problems/kTOapQ/submissions/
// https://leetcode-cn.com/problems/binary-search-tree-iterator/submissions/
// https://www.lintcode.com/problem/86/

use rust::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(2), Some(2), Some(5), None, None, Some(5), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::BSTIterator::new(root_node);
    println!("answer = {:?}", answer);
}
