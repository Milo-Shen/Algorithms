mod solution_1;

fn main() {
    let prices = vec![3, 3, 5, 0, 0, 3, 1, 4];
    let answer = solution_1::max_profit(prices);
    println!("answer = {}", answer);
}
