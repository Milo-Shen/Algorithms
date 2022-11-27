mod solution_1;

fn main() {
    let logs = vec![
        vec![1950, 1961],
        vec![1960, 1971],
        vec![1970, 1981],
    ];
    let answer = solution_1::maximum_population(logs);
    println!("answer = {}", answer);
}
