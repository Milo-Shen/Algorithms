mod solution_1;

fn main() {
    let answer = solution_1::dest_city(
        vec![
            vec![String::from("B"), String::from("C")],
            vec![String::from("D"), String::from("B")],
            vec![String::from("C"), String::from("A")],
        ]
    );
    
    println!("{}", answer);
}
