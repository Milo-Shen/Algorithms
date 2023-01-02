// https://leetcode.cn/problems/number-of-orders-in-the-backlog/

mod solution_1;

fn main() {
    let orders = vec![
        vec![10, 5, 0],
        vec![15, 2, 1],
        vec![25, 1, 1],
        vec![30, 4, 0],
    ];
    let answer = solution_1::get_number_of_backlog_orders(orders);
    println!("answer = {}", answer);
}
