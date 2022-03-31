mod solution_1;

fn main() {
    let mut arr = vec![2, 0, 2, 1, 1, 0];
    solution_1::solution(&mut arr);
    println!("{:?}", arr);
}
