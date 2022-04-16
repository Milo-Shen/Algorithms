mod solution;

fn main() {
    let str = String::from("abcdefg");
    let answer = solution::rotate_string2(str, 3, 1);
    println!("answer = {}", answer);
    let str = String::from("abcdefg");
    let answer = solution::rotate_string2(str, 0, 0);
    println!("answer = {}", answer);
    let str = String::from("abcdefg");
    let answer = solution::rotate_string2(str, 1, 2);
    println!("answer = {}", answer);
}
