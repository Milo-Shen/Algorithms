pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();
    let mut max = i32::MIN;
    let prefix_sum_arr = prefix_sum(&nums);

    for i in 0..nums_len {
        for j in i..nums_len {
            let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
            if max < sum {
                max = sum;
            }
        }
    }

    max
}

fn prefix_sum(nums: &Vec<i32>) -> Vec<i32> {
    let nums_len = nums.len();
    let mut prefix_sum_arr: Vec<i32> = Vec::with_capacity(nums_len + 1);
    prefix_sum_arr.push(0);

    for i in 0..nums_len {
        let sum = prefix_sum_arr[i] + nums[i];
        prefix_sum_arr.push(sum);
    }

    prefix_sum_arr
}