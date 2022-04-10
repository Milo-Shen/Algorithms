mod solution_1;
mod solution_2;

fn main() {
    let mut arr_1 = vec![0, 1, 0, 3, 12];
    solution_1::move_zeroes(&mut arr_1);
    println!("{:?}", arr_1);
    let mut arr_2 = vec![0, 1, 0, 3, 12];
    solution_2::move_zeroes(&mut arr_2);
    println!("{:?}", arr_2);
}
