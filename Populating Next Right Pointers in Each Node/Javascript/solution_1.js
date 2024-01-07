// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/

const connect = function (root) {
  if (!root) {
    return root;
  }

  let queue = [root];

  while (queue.length) {
    let len = queue.length;

    let previous = null;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      if (previous) {
        previous.next = node;
      }

      previous = node;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
};

const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 3, 4, 5, 6, 7];
let root = buildBinaryTree(nums);

connect(root);
