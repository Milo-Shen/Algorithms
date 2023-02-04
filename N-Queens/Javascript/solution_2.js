// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

const solveNQueens = function (n) {
  // 异常检测
  if (n <= 0) {
    return [];
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

  search(results, [], n, visited);

  return results;
};

// search 函数为搜索函数, n 表示已经放置了 n 个皇后, cols 表示每个皇后所在的列
function search(results, cols, n, visited) {
  // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
  if (cols.length === n) {
    results.push(draw(cols));
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
    search(results, cols, n, visited);
    visited.col.delete(col_index);
    visited.sum.delete(row + col_index);
    visited.diff.delete(row - col_index);
    cols.pop();
  }
}

// Draw 函数将 cols 数组转换为答案的绘制函数
function draw(cols) {
  let result = [];

  for (let i = 0; i < cols.length; i++) {
    let string = '';
    for (let j = 0; j < cols.length; j++) {
      string += j === cols[i] ? 'Q' : '.';
    }
    result.push(string);
  }

  return result;
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

console.log(solveNQueens(4));
