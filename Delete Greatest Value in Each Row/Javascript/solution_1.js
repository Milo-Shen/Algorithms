// https://leetcode.cn/problems/delete-greatest-value-in-each-row/

const deleteGreatestValue = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    grid[i].sort((a, b) => b - a);
  }

  let answer = 0;

  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, grid[i][j]);
    }
    answer += max;
  }

  return answer;
};

const grid = [
  [1, 2, 4],
  [3, 3, 1],
];
console.log(deleteGreatestValue(grid));
