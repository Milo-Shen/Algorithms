// https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/

mod solution_1;

fn main() {
    let num = vec![3, 3, 3, 3, 3, 1, 3];
    let answer = solution_1::group_the_people(num);
    println!("answer = {:?}", answer);
}
