// https://leetcode.cn/problems/delete-node-in-a-bst/
// https://lintcode.com/problem/remove-node-in-binary-search-tree/
// https://www.algolist.net/Data_structures/Binary_search_tree/Removal

const { TreeNode } = require('../../Base/TreeNode/Javascript/TreeNode');

function deleteNode(root, key) {
  // 因为涉及删除节点，凡是删除的问题，都会涉及到结构的变化，也就意味着 root 可能也会被删掉。
  // 类似很多 LinkedList 的问题，我们给 root 增加一个伪父亲节点 dummy。然后将父亲节点和当前节点一起传递到递归函数中进行处理
  let dummy = new TreeNode(Infinity);
  dummy.left = root;

  // 寻找 key 所代表的的当前节点的 parent 节点
  let parent = findNode(dummy, root, key);
  let node = null;

  // 寻找当前节点
  if (parent.left && parent.left.val === key) {
    node = parent.left;
  } else if (parent.right && parent.right.val === key) {
    node = parent.right;
  } else {
    return dummy.left;
  }

  // 删除节点
  removeNode(parent, node);

  return dummy.left;
}

function removeNode(parent, node) {
  if (!node.right) {
    if (parent.left === node) {
      parent.left = node.left;
    } else {
      parent.right = node.left;
    }
  } else {
    let temp = node.right;
    let father = node;

    // 一路找到右子树的最左节点
    while (temp.left) {
      father = temp;
      temp = temp.left;
    }

    if (father.left === temp) {
      father.left = temp.right;
    } else {
      father.right = temp.right;
    }

    if (parent.left === node) {
      parent.left = temp;
    } else {
      parent.right = temp;
    }

    temp.left = node.left;
    temp.right = node.right;
  }
}

// 发现当前节点的 parent 节点
function findNode(parent, node, value) {
  if (!node) {
    return parent;
  }

  if (node.val === value) {
    return parent;
  }

  if (value < node.val) {
    return findNode(node, node.left, value);
  } else {
    return findNode(node, node.right, value);
  }
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 3, 6, 2, 4, null, 7];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(deleteNode(binaryTreeRoot, 3));
