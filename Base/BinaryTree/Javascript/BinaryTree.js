const { TreeNode } = require('../../TreeNode/Javascript/TreeNode');

function isValid(data) {
  return data !== null && data !== undefined;
}

function buildBinaryTree(nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return null;
  }

  let root = new TreeNode(nums[0]);
  let queue = [root];
  for (let i = 1; i < nums_len; i += 2) {
    let node = queue.shift();
    if (isValid(nums[i]) && nums[i] !== '#') {
      let newNode = new TreeNode(nums[i]);
      node.left = newNode;
      queue.push(newNode);
    }
    if (isValid(nums[i + 1]) && nums[i + 1] !== '#') {
      let newNode = new TreeNode(nums[i + 1]);
      node.right = newNode;
      queue.push(newNode);
    }
  }

  return root;
}

module.exports = {
  buildBinaryTree,
};
