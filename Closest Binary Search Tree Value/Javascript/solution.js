// https://www.lintcode.com/problem/900
// https://leetcode.cn/problems/closest-binary-search-tree-value/

function closestValue(root, target) {
  // 中序遍历得到有序数组
  let data = [];
  let queue = [];

  let cur_node = root;
  while (cur_node) {
    queue.push(cur_node);
    cur_node = cur_node.left;
  }

  while (queue.length) {
    let node = queue.pop();
    data.push(node.val);
    node = node.right;
    while (node) {
      queue.push(node);
      node = node.left;
    }
  }

  // 下面使用二分法
  let start = 0;
  let end = data.length - 1;
  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);
    if (data[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  let startDiff = Math.abs(data[start] - target);
  let endDiff = Math.abs(data[end] - target);

  if (startDiff > endDiff) {
    return data[end];
  }

  return data[start];
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [4, 2, 5, 1, 3];
let target = 3.714286;
let binaryTreeRoot = buildBinaryTree(nums);
console.log(closestValue(binaryTreeRoot, target));
