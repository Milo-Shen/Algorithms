// https://leetcode.cn/problems/count-asterisks/

mod solution_1;

fn main() {
    let str = String::from("l|*e*et|c**o|*de|");
    let answer = solution_1::count_asterisks(str);
    println!("answer = {}", answer);
}
