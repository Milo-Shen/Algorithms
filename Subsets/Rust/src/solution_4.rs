// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums = nums;

    if nums.is_empty() {
        return Vec::new();
    }

    let mut queue: Vec<Vec<i32>> = vec![vec![]];
    nums.sort();

    let mut index = 0;

    while index < queue.len() {
        let subset = queue[index].clone();
        index += 1;

        for &num in &nums {
            if !subset.is_empty() && num <= *subset.last().unwrap() {
                continue;
            }

            let mut new_subsets = subset.clone();
            new_subsets.push(num);
            queue.push(new_subsets);
        }
    }

    queue
}
