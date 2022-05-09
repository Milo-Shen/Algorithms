// https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/

function serialize(root) {
  if (!root) {
    return '';
  }

  let serializeStr = '';
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      serializeStr += node.val;
      queue.push(node.left);
      queue.push(node.right);
    } else {
      serializeStr += '#';
    }
  }

  return serializeStr;
}

function deserialize(str) {
  return _buildBinaryTree(str.split(''));
}

function isValid(data) {
  return data !== null && data !== undefined;
}

function _buildBinaryTree(nums) {
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

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');
let nums = [
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -3,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -6,
  -6,
  null,
  null,
  0,
  6,
  5,
  null,
  9,
  null,
  null,
  -1,
  -4,
  null,
  null,
  null,
  -2,
];
let binaryTree = buildBinaryTree(nums);
console.log(serialize(deserialize(serialize(binaryTree))));

module.exports = {
  serialize,
};
