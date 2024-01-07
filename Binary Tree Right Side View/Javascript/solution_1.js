// https://leetcode.cn/problems/binary-tree-right-side-view/description/

const rightSideView = function (root) {
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    let level_last = queue[len - 1];
    result.push(level_last.val);

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};

const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 3, null, 5, null, 4];
let root = buildBinaryTree(nums);
console.log(rightSideView(root));
