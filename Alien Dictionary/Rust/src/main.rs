mod solution;

fn main() {
    let words = vec![
        String::from("ac"),
        String::from("ab"),
        String::from("b"),
    ];

    let answer = solution::alien_order(words);
    println!("answer = {}", answer);
}
