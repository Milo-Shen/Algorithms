pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut result = Vec::with_capacity(len);

    for i in 0..len {
        let mut count = 0;

        for j in 0..len {
            if nums[j] < nums[i] {
                count += 1;
            }
        }

        result.push(count);
    }

    result
}