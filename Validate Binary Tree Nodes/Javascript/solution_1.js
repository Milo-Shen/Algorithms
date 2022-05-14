// https://leetcode.cn/problems/validate-binary-tree-nodes/

// 这个方法是暴力求解，以为没有事先去找到二叉树的根节点，等于是去尝试了所有的节点都是根节点的可能性
// 时间复杂度太高，求图或树的问题时候，时刻思考入度的作用
function validateBinaryTreeNodes(n, leftChild, rightChild) {
  let treeCount = 0;
  for (let i = 0; i < n; i++) {
    let count = treeNodeCount(i, leftChild, rightChild);
    if (count === -1) {
      return false;
    }
    if (count === n) {
      return true;
    }
    if (count > 1) {
      treeCount++;
    }
  }
  return treeCount === 1;
}

function treeNodeCount(node, leftChild, rightChild) {
  let queue = [node];
  let node_set = new Set();

  while (queue.length) {
    let node = queue.shift();
    if (node_set.has(node)) {
      return -1;
    }
    node_set.add(node);
    // 遍历左子树和右子树
    let left_node = leftChild[node];
    let right_node = rightChild[node];
    if (left_node !== -1) {
      queue.push(left_node);
    }
    if (right_node !== -1) {
      queue.push(right_node);
    }
  }

  return node_set.size;
}

// test cases
let n = 4;
let leftChild = [3, -1, 1, -1];
let rightChild = [-1, -1, 0, -1];
console.log(validateBinaryTreeNodes(n, leftChild, rightChild));
