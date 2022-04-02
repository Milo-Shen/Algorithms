use std::collections::HashMap;
use std::time::Instant;

mod solution_1;
mod solution_2;

fn main() {
    let mut hash: HashMap<usize, usize> = HashMap::new();
    let now = Instant::now();
    let answer = solution_1::fibonacci(40);
    let elapsed_time = now.elapsed();
    println!("answer = {}, elapsed time = {}", answer, elapsed_time.as_millis());
    
    let now = Instant::now();
    let answer_memory = solution_2::fibonacci_memory(&mut hash, 90);
    let elapsed_time = now.elapsed();
    println!("answer_memory = {}, elapsed time = {}", answer_memory, elapsed_time.as_millis());
}
