fn defang_i_paddr(address: String) -> String {
    address.replace(".", "[.]")
}

fn main() {
    let answer = defang_i_paddr(String::from("1.1.1.1"));
    println!("answer = {}", answer);
}
