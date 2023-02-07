// https://leetcode.cn/problems/invert-binary-tree/

const invertTree = function (root) {
  if (root === null) {
    return null;
  }

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};
