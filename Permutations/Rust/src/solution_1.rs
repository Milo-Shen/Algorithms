pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = vec![];

    // 异常检测
    if nums.is_empty() {
        return result;
    }

    // 初始化 visited
    let nums_len = nums.len();
    let mut visited = Vec::with_capacity(nums_len);
    for _ in 0..nums_len {
        visited.push(false);
    }

    dfs(&nums, nums_len, &mut visited, &mut result, &mut Vec::new());

    result
}

fn dfs(nums: &Vec<i32>, nums_len: usize, visited: &mut Vec<bool>, result: &mut Vec<Vec<i32>>, subset: &mut Vec<i32>) {
    if subset.len() == nums_len {
        result.push(subset.clone());
        return;
    }

    for i in 0..nums_len {
        if visited[i] {
            continue;
        }

        visited[i] = true;
        subset.push(nums[i]);
        dfs(nums, nums_len, visited, result, subset);
        visited[i] = false;
        subset.pop();
    }
}