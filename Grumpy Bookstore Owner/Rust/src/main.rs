mod solution;

fn main() {
    let customers = vec![1, 0, 1, 2, 1, 1, 7, 5];
    let grumpy = vec![0, 1, 0, 1, 0, 1, 0, 1];
    let minutes = 3;
    let answer = solution::max_satisfied(customers, grumpy, minutes);
    println!("answer = {}", answer);
}

