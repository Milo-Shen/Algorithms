// https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/
// https://leetcode.cn/problems/h54YBf/

function isValid(data) {
  return data !== null && data !== undefined;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const serialize = function (root) {
  if (!root) {
    return '';
  }

  let output = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    if (node === '#') {
      output.push(node);
      continue;
    }

    output.push(node.val);
    queue.push(node.left || '#');
    queue.push(node.right || '#');
  }

  return output.join(',');
};

const deserialize = function (data) {
  let nums_len = data.length;
  if (!data || !nums_len) {
    return null;
  }

  data = data.split(',');

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

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [1, 2, '#', 3];
let root = buildBinaryTree(nums);
console.log(serialize(deserialize(serialize(root))));
