mod solution_1;
mod solution_2;

fn main() {
    let arr = vec![1, 10, 15, 25, 35, 45, 50, 59];
    let answer_1 = solution_1::find_closest_elements(arr, 7, 30);
    println!("answer_1 = {:?}", answer_1);
    let arr = vec![1, 10, 15, 25, 35, 45, 50, 59];
    let answer_2 = solution_2::find_closest_elements(arr, 7, 30);
    println!("answer_2 = {:?}", answer_2);
}
