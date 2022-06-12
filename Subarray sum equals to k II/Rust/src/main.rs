mod solution_1;

fn main() {
    let nums = vec![
        -4, -1, -6, 16, 13, 2, -1, -4, 6, 6, -9, 13, 3, -6, -6, 16, 8, -10, 2, 1, 0, 8, 6, 16, 11, 0, 10,
        -6, -5, 16,
    ];
    let k = 12;
    let answer = solution_1::subarray_sum_equals_k_i_i(nums, k);
    println!("answer = {}", answer);
}