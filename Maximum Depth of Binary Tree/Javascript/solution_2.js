// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/submissions/
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// https://www.lintcode.com/problem/97/

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let queue = [root];

  let depth = 0;

  while (queue.length) {
    let len = queue.length;
    depth++;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 3, '#', '#', 4, 5];
let binaryTree = buildBinaryTree(nums);
console.log(maxDepth(binaryTree));
