use list::{build_list, print_list};

fn main() {
    let arr = vec![1, 2, 3];
    let root = build_list(arr);
    print_list(root);
}
