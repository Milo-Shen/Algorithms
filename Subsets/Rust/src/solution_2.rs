// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums = nums;

    if nums.is_empty() {
        return Vec::new();
    }

    let mut queue: Vec<Vec<i32>> = vec![vec![]];
    nums.sort();

    for num in nums {
        let size = queue.len();

        for i in 0..size {
            let mut subsets = queue[i].clone();
            subsets.push(num);
            queue.push(subsets);
        }
    }

    queue
}
