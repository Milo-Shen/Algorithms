// https://www.lintcode.com/problem/69/solution
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 使用哨兵节点的方式 ( Dummy Node )
function levelOrder(root) {
  if (!root) return [];

  let result = [];
  let level = [];
  let queue = [];
  queue.push(root);
  queue.push(null);

  while (queue.length !== 0) {
    let node = queue.shift();

    if (node === null) {
      if (level.length === 0) {
        break;
      }

      result.push(level);
      level = [];
      queue.push(null);
      continue;
    }

    level.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [3, 9, 20, null, null, 15, 7];
let binaryTree = buildBinaryTree(nums);
console.log(levelOrder(binaryTree));
