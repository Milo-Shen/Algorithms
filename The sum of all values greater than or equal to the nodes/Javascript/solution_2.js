// https://leetcode.cn/problems/w6cpku/

// 二叉搜索树是一棵空树，或者是具有下列性质的二叉树：
// 若它的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
// 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
// 它的左、右子树也分别为二叉搜索树。
// 由这样的性质我们可以发现，二叉搜索树的中序遍历是一个单调递增的有序序列。如果我们反序地中序遍历该二叉搜索树，即可得到一个单调递减的有序序列。

let sum = 0;
const convertBST = function (root) {
  dfs(root);
  return root;
};

function dfs(node) {
  if (!node) {
    return;
  }

  dfs(node.right);
  sum += node.val;
  node.val = sum;
  dfs(node.left);
}

const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [0, null, 1];
let binaryTree = buildBinaryTree(nums);
console.log(convertBST(binaryTree));
