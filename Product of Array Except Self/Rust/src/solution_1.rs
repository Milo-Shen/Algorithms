pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut answer = vec![0; len];
    answer[0] = 1;

    for i in 1..len {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let mut r = 1;
    for i in (0..len - 1).rev() {
        r = r * nums[i + 1];
        answer[i] *= r;
    }

    answer
}
