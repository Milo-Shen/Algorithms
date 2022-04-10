mod solution_1;
mod solution_2;

fn main() {
    let mut arr = vec![3, 2, 2, 1, 4];
    solution_1::sort_colors2(&mut arr, 4);
    println!("answer1 = {:?}", arr);
}
