mod solution;

fn main() {
    let arr = vec![3, 4, 5, 1, 2];
    let answer = solution::find_min(arr);
    println!("answer = {:?}", answer);
}
