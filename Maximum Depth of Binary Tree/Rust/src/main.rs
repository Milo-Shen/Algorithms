// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/submissions/
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// https://www.lintcode.com/problem/97/

use binary_tree::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::max_depth(root_node);
    println!("answer = {:?}", answer);
}
