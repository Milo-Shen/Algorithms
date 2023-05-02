// https://leetcode.cn/problems/find-bottom-left-tree-value/

// 广度优先搜索遍历每一层的节点。
// 在遍历一个节点时，需要先把它的非空右子节点放入队列，然后再把它的非空左子节点放入队列，这样才能保证从右到左遍历每一层的节点。
// 广度优先搜索所遍历的最后一个节点的值就是最底层最左边节点的值。
function findBottomLeftValue(root) {
  // 逆序 BFS 二叉树
  let queue = [root];

  let node = root;
  while (queue.length) {
    node = queue.shift();

    if (node.right) {
      queue.push(node.right);
    }

    if (node.left) {
      queue.push(node.left);
    }
  }

  return node.val;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [2, 1, 3];
let binaryTree = buildBinaryTree(nums);
console.log(findBottomLeftValue(binaryTree));
