// https://leetcode.cn/problems/max-increase-to-keep-city-skyline/

const maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;
  const rowMax = new Array(n).fill(0);
  const colMax = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer += Math.min(rowMax[i], colMax[j]) - grid[i][j];
    }
  }

  return answer;
};

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ]),
);
