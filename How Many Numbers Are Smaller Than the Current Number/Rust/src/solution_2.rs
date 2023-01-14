pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    
    let mut result = vec![0; len];
    let mut data = Vec::with_capacity(len);

    for (num, &index) in nums.iter().enumerate() {
        data.push((index, num));
    }

    data.sort_by(|a, b| a.0.cmp(&b.0));

    let mut prev = -1;

    for i in 0..len {
        if prev == -1 || data[i].0 != data[i - 1].0 {
            prev = i as i32;
        }
        result[data[i].1] = prev;
    }

    result
}