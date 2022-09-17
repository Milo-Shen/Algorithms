// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search-ii/

use std::collections::HashSet;

pub fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
    // 搜索的四个方向
    let directions = [
        (-1, 0),
        (0, 1),
        (1, 0),
        (0, -1),
    ];

    // 存储单词的结果
    let mut results: HashSet<String> = HashSet::new();

    // 异常检测
    let row = board.len();
    if row == 0 {
        return vec![];
    }

    let col = board[0].len();
    if col == 0 {
        return vec![];
    }

    // 是否已经访问过
    let mut visited = vec![vec![false; col]; row];

    // 先找到所有单词的前缀和最大长度
    let prefixes = find_prefixes_max_len(&words);

    // DFS 遍历寻找是否 word list 里的单词能否被找到
    for i in 0..row {
        for j in 0..col {
            visited[i][j] = true;
            dfs(&prefixes, &board, &words, i as i32, j as i32, String::from(board[i][j]), &mut visited, &mut results, &directions);
            visited[i][j] = false;
        }
    }

    results.into_iter().collect()
}

fn find_prefixes_max_len(words: &Vec<String>) -> HashSet<String> {
    let mut prefixes: HashSet<String> = HashSet::new();
    let words_len = words.len();
    for i in 0..words_len {
        let word = &words[i];
        let word_chars: Vec<char> = word.chars().collect();
        let word_chars_len = word_chars.len() as i32;
        for j in 1..word_chars_len as usize + 1 {
            prefixes.insert(String::from(&word[0..j]));
        }
    }

    prefixes
}

fn is_valid(x: i32, y: i32, board: &Vec<Vec<char>>, visited: &Vec<Vec<bool>>) -> bool {
    let row = board.len() as i32;
    let col = board[0].len() as i32;

    if x < 0 || x >= row || y < 0 || y >= col {
        return false;
    }

    !visited[x as usize][y as usize]
}

// 第一步: 递归的定义
fn dfs(
    prefixes: &HashSet<String>,
    board: &Vec<Vec<char>>,
    words: &Vec<String>,
    x: i32,
    y: i32,
    str: String,
    visited: &mut Vec<Vec<bool>>,
    result: &mut HashSet<String>,
    directions: &[(i32, i32); 4],
) {
    // 第三步, 递归的退出条件
    if !prefixes.contains(&str) {
        return;
    }

    if words.contains(&str) {
        result.insert(str.clone());
    }

    // 第二步, 递归的拆解
    for i in 0..4 {
        let (delta_x, delta_y) = directions[i];
        let pos_x = x + delta_x;
        let pos_y = y + delta_y;

        if !is_valid(pos_x, pos_y, board, visited) {
            continue;
        }

        visited[pos_x as usize][pos_y as usize] = true;
        dfs(prefixes, board, words, pos_x, pos_y, str.clone() + &String::from(board[pos_x as usize][pos_y as usize]), visited, result, &directions);
        visited[pos_x as usize][pos_y as usize] = false;
    }
}