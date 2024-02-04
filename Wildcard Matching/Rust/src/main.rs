mod solution_1;
mod solution_2;

fn main() {
    println!(
        "{}",
        solution_1::is_match(String::from("aa"), String::from("a"))
    );

    println!(
        "{}",
        solution_2::is_match(String::from("aa"), String::from("a"))
    );
}
