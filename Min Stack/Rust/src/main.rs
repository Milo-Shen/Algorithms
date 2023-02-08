// https://leetcode.cn/problems/min-stack/

mod solution_1;

fn main() {
    let mut min_stack = solution_1::MinStack::new();
    min_stack.push(-2);
    min_stack.push(0);
    min_stack.push(-3);
    println!("{}", min_stack.get_min());
    min_stack.pop();
    min_stack.top();
    println!("{}", min_stack.get_min());
}
