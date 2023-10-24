// https://www.lintcode.com/problem/398

const longestContinuousIncreasingSubsequence2 = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  let directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  let rows = matrix.length;
  let cols = matrix[0].length;

  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push(Array(cols).fill(1));
  }

  let points = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      points.push([matrix[i][j], i, j]);
    }
  }

  points = points.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < points.length; i++) {
    for (let { x, y } of directions) {
      let pos_x = points[i][1];
      let pos_y = points[i][2];

      let new_x = pos_x + x;
      let new_y = pos_y + y;

      if (new_x < 0 || new_x >= rows || new_y < 0 || new_y >= cols) {
        continue;
      }

      if (matrix[pos_x][pos_y] > matrix[new_x][new_y]) {
        dp[pos_x][pos_y] = Math.max(dp[pos_x][pos_y], dp[new_x][new_y] + 1);
      }
    }
  }

  let max = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      max = Math.max(max, dp[i][j]);
    }
  }

  return max;
};

console.log(
  longestContinuousIncreasingSubsequence2([
    [1, 2, 3, 4, 5],
    [16, 17, 24, 23, 6],
    [15, 18, 25, 22, 7],
    [14, 19, 20, 21, 8],
    [13, 12, 11, 10, 9],
  ]),
);
