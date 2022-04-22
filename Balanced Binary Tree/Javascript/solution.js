function isBalanced(root) {
  let { isBalanced, height } = divideConquer(root);
  return isBalanced;
}

function divideConquer(root) {
  if (!root) {
    return { isBalanced: true, height: 0 };
  }

  let { isBalanced: isLeftBalanced, height: leftHeight } = divideConquer(root.left);
  let { isBalanced: isRightBalanced, height: rightHeight } = divideConquer(root.right);
  let rootHeight = Math.max(leftHeight, rightHeight) + 1;

  if (!isLeftBalanced || !isRightBalanced) {
    return { isBalanced: false, height: rootHeight };
  }

  if (Math.abs(rightHeight - leftHeight) > 1) {
    return { isBalanced: false, height: rootHeight };
  }

  return { isBalanced: true, height: rootHeight };
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, 4, 2, 3];
let binaryTree = buildBinaryTree(nums);
console.log(isBalanced(binaryTree));
