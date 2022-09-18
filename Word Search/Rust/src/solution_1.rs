// 搜索的四个方向
const DIRECTIONS: [(i32, i32); 4] = [(-1, 0), (0, 1), (1, 0), (0, -1)];

pub fn exist(board: Vec<Vec<char>>, word: String) -> bool {
    // 异常检测
    let row = board.len();
    if row == 0 {
        return false;
    }

    let col = board[0].len();
    if col == 0 {
        return false;
    }

    // 将 string 类型的 word 转换成 char
    let word_chars = word.chars().collect::<Vec<char>>();
    let word_len = word_chars.len();

    // 是否已经访问过
    let mut visited = vec![vec![false; col]; row];

    // DFS 遍历寻找是否 word list 里的单词能否被找到
    for i in 0..row {
        for j in 0..col {
            visited[i][j] = true;
            let is_exist = dfs(
                &board,
                row as i32,
                col as i32,
                &mut visited,
                i,
                j,
                &word_chars,
                0,
                word_len,
            );
            visited[i][j] = false;

            if is_exist {
                return true;
            }
        }
    }

    false
}

fn is_valid(x: i32, y: i32, board: &Vec<Vec<char>>, visited: &Vec<Vec<bool>>) -> bool {
    let row = board.len() as i32;
    let col = board[0].len() as i32;

    if x < 0 || x >= row || y < 0 || y >= col {
        return false;
    }

    !visited[x as usize][y as usize]
}

fn dfs(
    board: &Vec<Vec<char>>,
    row: i32,
    col: i32,
    visited: &mut Vec<Vec<bool>>,
    x: usize,
    y: usize,
    word_chars: &Vec<char>,
    index: usize,
    word_len: usize,
) -> bool {
    if board[x][y] != word_chars[index] {
        return false;
    }

    if index == word_len - 1 {
        return true;
    }

    for (delta_x, delta_y) in DIRECTIONS {
        let pos_x = x as i32 + delta_x;
        let pos_y = y as i32 + delta_y;

        if !is_valid(pos_x, pos_y, board, visited) {
            continue;
        }

        visited[pos_x as usize][pos_y as usize] = true;
        let is_exist = dfs(
            board,
            row,
            col,
            visited,
            pos_x as usize,
            pos_y as usize,
            word_chars,
            index + 1,
            word_len,
        );
        visited[pos_x as usize][pos_y as usize] = false;

        if is_exist {
            return true;
        }
    }

    false
}
