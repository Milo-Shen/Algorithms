mod solution_1;

fn main() {
    let mut s = vec!['h', 'e', 'l', 'l', 'o'];
    let answer = solution_1::reverse_string(&mut s);
    println!("answer = {:?}", s);
}
