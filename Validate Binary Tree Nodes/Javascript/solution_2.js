// https://leetcode.cn/problems/validate-binary-tree-nodes/

function validateBinaryTreeNodes(n, leftChild, rightChild) {
  // 获取节点的入度数
  let indegree = getIndegree(n, leftChild, rightChild);
  let zeroIndegree = [];
  for (let [node, degree] of indegree) {
    if (degree === 0) {
      zeroIndegree.push(node);
    }
  }

  if (!zeroIndegree.length || zeroIndegree.length > 1) {
    return false;
  }

  let queue = zeroIndegree;
  let set = new Set();

  while (queue.length) {
    let node = queue.shift();
    if (set.has(node)) {
      return false;
    }
    set.add(node);
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

  return set.size === n;
}

function getIndegree(n, leftChild, rightChild) {
  let indegree = new Map();

  // 新建 indegree graph
  for (let i = 0; i < n; i++) {
    indegree.set(i, 0);
  }

  for (let i = 0; i < n; i++) {
    let left_node = leftChild[i];
    let right_node = rightChild[i];

    if (left_node !== -1) {
      indegree.set(left_node, indegree.get(left_node) + 1);
    }

    if (right_node !== -1) {
      indegree.set(right_node, indegree.get(right_node) + 1);
    }
  }

  return indegree;
}

// test cases
let n = 4;
let leftChild = [3, -1, 1, -1];
let rightChild = [-1, -1, 0, -1];
console.log(validateBinaryTreeNodes(n, leftChild, rightChild));
