// https://leetcode.cn/problems/diameter-of-binary-tree/

function diameterOfBinaryTree(root) {
  let max = -Infinity;

  const count = (root) => {
    if (root === null) {
      return 0;
    }
    let left = count(root.left);
    let right = count(root.right);

    // 经过的结点数 = 某个结点左子树深度 + 右子树深度 + 1 (此节点本身)
    // 当前经过的结点数最大值 = Math.max(当前经过的结点数, 上一轮经过的结点数最大值)
    max = Math.max(left + right + 1, max);
    return Math.max(left, right) + 1;
  };

  count(root);
  return max - 1; // 直径长度 = 经过的结点数最大值 - 1
}
