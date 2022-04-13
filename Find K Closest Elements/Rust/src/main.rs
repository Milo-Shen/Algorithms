mod solution_1;

fn main() {
    let arr = vec![1, 10, 15, 25, 35, 45, 50, 59];
    let result = solution_1::find_closest_elements(arr, 7, 30);
    println!("{:?}", result);
}
