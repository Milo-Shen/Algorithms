// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

const solveNQueens = function (n) {
  // 异常检测
  if (n <= 0) {
    return [];
  }

  let results = [];

  search(results, [], n);

  return results;
};

// search 函数为搜索函数, n 表示已经放置了 n 个皇后, cols 表示每个皇后所在的列
function search(results, cols, n) {
  // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
  if (cols.length === n) {
    results.push(draw(cols));
    return;
  }

  // 若已经放置了 n 个皇后表示出现了一种解法, 绘制后加入答案 result
  for (let col_index = 0; col_index < n; col_index++) {
    if (!is_valid(cols, col_index)) {
      continue;
    }

    // 若合法则递归枚举下一行的皇后
    cols.push(col_index);
    search(results, cols, n);
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

function is_valid(cols, col) {
  let row = cols.length;
  for (let row_index = 0; row_index < cols.length; row_index++) {
    // 如果有其他皇后在同一列或同一对角线上则不合法
    if (cols[row_index] === col) {
      return false;
    }

    if (row + col === row_index + cols[row_index]) {
      return false;
    }

    if (row - col === row_index - cols[row_index]) {
      return false;
    }
  }

  return true;
}

console.log(solveNQueens(4));
