mod solution_1;
mod solution_2;

fn main() {
    let mut arr_1 = vec![3, 2, 2, 1, 4];
    solution_1::sort_colors2(&mut arr_1, 4);
    println!("arr_1 = {:?}", arr_1);
    let mut arr_2 = vec![3, 2, 3, 3, 4, 3, 3, 2, 4, 4, 1, 2, 1, 1, 1, 3, 4, 3, 4, 2];
    solution_2::sort_colors2(&mut arr_2, 4);
    println!("arr_2 = {:?}", arr_2);
}
