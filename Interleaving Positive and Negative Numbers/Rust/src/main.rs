mod solution_1;

fn main() {
    let arr = vec![-1, -2, -3, 4, 5, 6, 7, -8, 10];
    let answer = solution_1::re_range(arr);
    println!("answer = {:?}", answer);
}
