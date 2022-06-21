mod solution;

fn main() {
    let a = vec![4, 5, 4, 5, 6, 4, 7, 10, 9, 1];
    let k = 1;
    let l = 4;
    let answer = solution::pick_apples(a, k, l);
    println!("answer = {}", answer);
}
