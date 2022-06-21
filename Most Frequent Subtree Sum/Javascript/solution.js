// https://leetcode.cn/problems/most-frequent-subtree-sum/

function findFrequentTreeSum(root) {
  // 异常检测
  if (!root) {
    return [];
  }

  let map = new Map();
  let result = {
    list: [],
    max_count: -Infinity,
  };

  divideConquer(root, map);

  let map_list = [...map];
  for (let i = 0, len = map_list.length; i < len; i++) {
    let [num, count] = map_list[i];
    if (result.max_count < count) {
      result.max_count = count;
      result.list.length = 0;
      result.list.push(num);
    } else if (count === result.max_count) {
      result.list.push(num);
    }
  }

  return result.list;
}

function divideConquer(root, map) {
  if (!root) {
    return 0;
  }

  let left_sum = divideConquer(root.left, map);
  let right_sum = divideConquer(root.right, map);
  let total = root.val + left_sum + right_sum;

  map.set(total, (map.get(total) || 0) + 1);

  return total;
}

// test cases
const { buildBinaryTree } = require('../../Base/BinaryTree/Javascript/BinaryTree');
let nums = [5, 2, -5];
let binaryTreeRoot = buildBinaryTree(nums);
console.log(findFrequentTreeSum(binaryTreeRoot));
