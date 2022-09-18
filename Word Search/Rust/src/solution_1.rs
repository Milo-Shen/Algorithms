// 搜索的四个方向

const DIRECTIONS: [(i32, i32); 4] = [
    (-1, 0),
    (0, 1),
    (1, 0),
    (0, -1),
];

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
    println!("{:?}", word_chars);

    // 是否已经访问过
    let mut visited = vec![vec![false; col]; row];

    // DFS 遍历寻找是否 word list 里的单词能否被找到
    // for i in 0..row {
    //     for j in 0..col {
    //         visited[i][j] = true;
    //         dfs(&board, &words, i as i32, j as i32, String::from(board[i][j]), &mut visited, &mut results, &directions);
    //         visited[i][j] = false;
    //     }
    // }

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

fn dfs(board: &Vec<Vec<char>>) {}