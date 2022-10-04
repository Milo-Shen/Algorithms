// https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/
// https://leetcode.cn/problems/h54YBf/

function isValid(data) {
  return data !== null && data !== undefined;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (!root) {
    return '';
  }

  let output = '';
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node === '#') {
      output += node;
      continue;
    }

    output += node.val;
    queue.push(node.left || '#');
    queue.push(node.right || '#');
  }

  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  let nums_len = data.length;
  if (!data || !nums_len) {
    return null;
  }

  let root = new TreeNode(data[0]);
  let queue = [root];
  for (let i = 1; i < nums_len; i += 2) {
    let node = queue.shift();
    if (isValid(data[i]) && data[i] !== '#') {
      let newNode = new TreeNode(data[i]);
      node.left = newNode;
      queue.push(newNode);
    }
    if (isValid(data[i + 1]) && data[i + 1] !== '#') {
      let newNode = new TreeNode(data[i + 1]);
      node.right = newNode;
      queue.push(newNode);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
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
let root = buildBinaryTree(nums);
console.log(serialize(deserialize(serialize(root))));
