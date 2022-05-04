// https://www.lintcode.com/problem/573

function shortestDistance(grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let row = grid.length;
  let col = grid[0].length;

  let visited = init_visited(row, col);

  // 所有房子到邮局的距离和
  let count = 0;

  // 开始遍历邮局网络
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // todo: update the condition of it
      if (~~grid[i][j] === 1 && !visited[i][j]) {
        bfs(grid, i, j, visited);
      }
    }
  }

  return count;
}

function init_visited(row, col) {
  let visited = [];

  for (let i = 0; i < row; i++) {
    let row_arr = [];
    for (let j = 0; j < col; j++) {
      row_arr.push(false);
    }
    visited.push(row_arr);
  }

  return visited;
}

// todo: bfs it
function bfs() {}

// test cases
let grid = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 2, 1],
  [0, 1, 0, 0, 0],
];

console.log(shortestDistance(grid));
