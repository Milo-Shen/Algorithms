mod solution_1;

fn main() {
    let text1 = String::from("abcde");
    let text2 = String::from("ace");
    println!("{}", solution_1::longest_common_subsequence(text1, text2));
}
