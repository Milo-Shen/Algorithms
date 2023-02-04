// https://leetcode.cn/problems/n-queens-ii/

const totalNQueens = function (n) {
  // 异常检测
  if (n <= 0) {
    return 0;
  }

  let results = [];

  // 有没有被访问过
  let visited = {
    col: new Set(),
    // 副对角线: 方向二的斜线为从右上到左下方向，同一条斜线上的每个位置满足行下标与列下标之和相等
    sum: new Set(),
    // 正对角线: 方向一的斜线为从左上到右下方向，同一条斜线上的每个位置满足行下标与列下标之差相等
    diff: new Set(),
  };

  let answer = {
    sum: 0,
  };

  search(results, [], n, visited, answer);

  return answer.sum;
};

// search 函数为搜索函数, n 表示已经放置了 n 个皇后, cols 表示每个皇后所在的列
function search(results, cols, n, visited, answer) {
  // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
  if (cols.length === n) {
    answer.sum++;
    return;
  }

  let row = cols.length;

  // 若已经放置了 n 个皇后表示出现了一种解法, 绘制后加入答案 result
  for (let col_index = 0; col_index < n; col_index++) {
    if (!is_valid(cols, col_index, visited)) {
      continue;
    }

    // 若合法则递归枚举下一行的皇后
    cols.push(col_index);
    visited.col.add(col_index);
    visited.sum.add(row + col_index);
    visited.diff.add(row - col_index);
    search(results, cols, n, visited, answer);
    visited.col.delete(col_index);
    visited.sum.delete(row + col_index);
    visited.diff.delete(row - col_index);
    cols.pop();
  }
}

function is_valid(cols, col, visited) {
  let row = cols.length;

  if (visited.col.has(col)) {
    return false;
  }

  if (visited.sum.has(row + col)) {
    return false;
  }

  if (visited.diff.has(row - col)) {
    return false;
  }

  return true;
}

console.log(totalNQueens(4));
