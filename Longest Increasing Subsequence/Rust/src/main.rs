mod solution_1;
mod solution_2;

fn main() {
    let test_data = vec![10, 9, 2, 5, 3, 7, 101, 18];
    let answer = solution_1::length_of_lis(test_data);
    println!("{}", answer);

    let test_data = vec![0];
    let answer = solution_2::length_of_lis(test_data);
    println!("{}", answer);
}
