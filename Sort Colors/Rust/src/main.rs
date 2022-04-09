mod solution_1;
mod solution_2;

fn main() {
    let mut arr_1 = vec![2, 0, 2, 1, 1, 0];
    solution_1::solution(&mut arr_1);
    println!("The answer of solution_1 is: {:?}", arr_1);
    let mut arr_2 = vec![2, 0, 2, 1, 1, 0];
    solution_2::solution(&mut arr_2);
    println!("The answer of solution_2 is: {:?}", arr_2);
}
