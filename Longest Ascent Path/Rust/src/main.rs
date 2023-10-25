mod solution_1;

fn main() {
    let test_data = vec![
        vec![1, 2, 3, 4, 5],
        vec![16, 17, 24, 23, 6],
        vec![15, 18, 25, 22, 7],
        vec![14, 19, 20, 21, 8],
        vec![13, 12, 11, 10, 9],
    ];

    let answer = solution_1::longest_continuous_increasing_subsequence2(test_data);
    println!("answer = {}", answer);
}
