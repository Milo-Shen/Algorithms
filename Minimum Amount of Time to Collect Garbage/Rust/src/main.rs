// https://leetcode.cn/problems/minimum-amount-of-time-to-collect-garbage/

mod solution_1;

fn main() {
    let garbage = vec![String::from('G'), String::from('P'), String::from("GP"), String::from("GG")];
    let travel = vec![2, 4, 3];
    let answer = solution_1::garbage_collection(garbage, travel);
    println!("answer = {}", answer);
}