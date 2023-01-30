mod solution_1;

fn main() {
    let begin_word = String::from("hit");
    let end_word = String::from("cog");
    let word_list = vec![
        String::from("hot"), String::from("dot"), String::from("dog"),
        String::from("lot"), String::from("log"), String::from("cog"),
    ];
    let answer = solution_1::ladder_length(begin_word, end_word, word_list);
    println!("answer = {}", answer);
}