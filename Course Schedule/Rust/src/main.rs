mod solution;

fn main() {
    let nums_course = 4;
    let prerequisites = vec![
        vec![1, 0], vec![2, 0],
        vec![3, 1], vec![3, 2],
    ];
    let answer = solution::can_finish(nums_course, prerequisites);
    println!("answer = {:?}", answer);
}
