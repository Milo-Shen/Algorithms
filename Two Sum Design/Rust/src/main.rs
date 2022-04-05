extern crate core;

mod solution;

use solution::TwoSum;

fn main() {
    let mut two_sum = TwoSum::new();
    two_sum.add(3);
    two_sum.add(10);
    two_sum.add(6);
    two_sum.add(3);
    let answer = two_sum.find(6);

    println!("{:?}", two_sum);
    println!("answer = {}", answer);
}
