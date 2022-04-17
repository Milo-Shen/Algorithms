// https://www.lintcode.com/problem/69/solution
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 使用双队列的方式
function levelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let temp = [];
    let next_queue = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (node.left) next_queue.push(node.left);
      if (node.right) next_queue.push(node.right);
      temp.push(node.val);
    }
    result.push(temp);
    queue = next_queue;
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 9, 20, null, null, 15, 7];
let binaryTree = buildBinaryTree(nums);
console.log(levelOrder(binaryTree));
