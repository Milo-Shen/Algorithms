// https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/

mod solution_1;

fn main() {
    let nums = vec![17, 18, 5, 4, 6, 1];
    let answer = solution_1::replace_elements(nums);
    println!("answer = {:?}", answer);
}
