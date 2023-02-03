// https://leetcode.cn/problems/n-queens/
// https://www.lintcode.com/problem/33/

// 下面的解法是为 lint code 准备的
const solveNQueens = function (n) {
  // 异常检测
  if (n <= 0) {
    return results;
  }

  let results = [];

  search(n, [], results);

  return results;
};

// search 函数为搜索函数, n 表示已经放置了 n 个皇后, cols 表示每个皇后所在的列
function search(results, cols, n) {
  // 若已经放置了 n 个皇后, 表示出现了一种解法, 绘制后加入答案 result
  if (cols.length === n) {
    results.push(draw(cols));
  }

  //
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

console.log(solveNQueens(4));
