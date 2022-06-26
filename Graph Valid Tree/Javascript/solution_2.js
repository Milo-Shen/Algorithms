// https://www.lintcode.com/problem/178/description
// https://leetcode.cn/problems/graph-valid-tree/

function validTree(n, edges) {
  // 特殊处理
  if (!n || edges.length !== n - 1) {
    return false;
  }
}

// test cases
let n = 5;
let edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];
console.log(validTree(n, edges));
