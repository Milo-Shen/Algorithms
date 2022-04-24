// https://www.lintcode.com/problem/137/
// https://leetcode-cn.com/problems/clone-graph/

// test cases
const {
  UndirectedGraphNode,
  buildUndirectedGraph,
} = require('../../Base/UndirectedGraphNode/Javascript/UndirectedGraphNode');

console.log(buildUndirectedGraph([1, 2, '4#2', 1, '4#4', 1, 2]));