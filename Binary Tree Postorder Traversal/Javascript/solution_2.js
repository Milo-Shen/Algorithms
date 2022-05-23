// https://leetcode.cn/problems/binary-tree-postorder-traversal/
// https://www.lintcode.com/problem/68/solution

/**
 * 后序遍历
 * 父节点在栈内会被访问两次，第一次从左子树出栈后访问父节点时，父节点不进行出栈，而是将右子树入栈，继续访问右子树。
 * 只有当右子树出栈后访问父节点时，父节点才会出栈。
 * 所以要记录上一个出栈的节点，用来判断一个节点的右子树是否被访问过。
 * 迭代流程：
 * 【1】找到最左下方节点并将路径上的节点入栈直到 node.left 为空
 * 【2】判断栈顶 (最左下方节点) node.right 是否为空，不为空则以 node.right 为起始节点继续【1】的操作
 * 【3】如果没有右节点 或 右节点已被访问过，则弹出栈顶元素, 并记录当前弹出的节点 ( 用来判断是否是从右子树遍历到父节点 )
 * 迭代写法，利用pre记录上一个访问过的结点，与当前结点比较，如果是当前结点的子节点，说明其左右结点均已访问，将当前结点出栈，更新pre记录的对象
 */
function preorderTraversal(root) {
  let result = [];
  if (!root) {
    return result;
  }

  let stack = [];
  let prev = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (!root.right || root.right === prev) {
      result.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }

  return result;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, null, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(preorderTraversal(binaryTree));
