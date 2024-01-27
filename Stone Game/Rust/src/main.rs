mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::stone_game(vec![3, 4, 3]);
    println!("{}", answer);

    let answer = solution_2::stone_game(vec![3, 4, 3]);
    println!("{}", answer);
}
