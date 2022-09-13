pub fn permutation(s: String) -> Vec<String> {
    let mut result: Vec<String> = vec![];

    let char_arr: Vec<char> = s.chars().collect();

    // 异常检测
    if char_arr.is_empty() {
        return result;
    }

    // 对 char_arr 进行排序
    let mut char_arr = char_arr;
    char_arr.sort();

    // 初始化 visited
    let char_arr_len = char_arr.len();
    let mut visited = Vec::with_capacity(char_arr_len);
    for _ in 0..char_arr_len {
        visited.push(false);
    }

    dfs(&char_arr, char_arr_len, &mut visited, 0, &mut result, &mut Vec::new());

    result
}

fn dfs(char_arr: &Vec<char>, char_arr_len: usize, visited: &mut Vec<bool>, start_index: usize, result: &mut Vec<String>, subset: &mut Vec<char>) {
    if start_index == char_arr_len {
        result.push(subset.iter().collect::<String>());
        return;
    }

    for i in 0..char_arr_len {
        if visited[i] {
            continue;
        }

        if i > 0 && char_arr[i] == char_arr[i - 1] && !visited[i - 1] {
            continue;
        }

        visited[i] = true;
        subset.push(char_arr[i]);
        dfs(char_arr, char_arr_len, visited, start_index + 1, result, subset);
        visited[i] = false;
        subset.pop();
    }
}