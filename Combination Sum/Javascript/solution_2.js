// https://leetcode.cn/problems/combination-sum/
// https://www.lintcode.com/problem/135/

function combinationSum(candidates, target) {
  let result = [];
  if (!candidates) {
    return [[]];
  }

  // 对数据进行去重排序
  candidates = [...new Set(candidates)].sort((a, b) => a - b);
  dfs(candidates, 0, target, [], result);

  return result;
}

// 递归三要素之一: 递归的定义
function dfs(nums, index, target, subset, result) {
  // 递归三要素之三: 递归的出口, 已经找出和为 target 的一组结果
  if (target === 0) {
    result.push([...subset]);
    return;
  }

  // 递归要素之二: 递归的拆解, 挑一个数放入 current
  for (let i = index, len = nums.length; i < len; i++) {
    // 如果剩余和比当前数字小, 不考虑当前数字之后更大的数字 ( 升序排列 )
    // 这个检测可以不在这里做, 也可以在下一层调用做
    if (target < nums[i]) {
      return;
    }

    subset.push(nums[i]);
    // 递归到下一层去选定下一个数字
    // 这里传入 1 而不是 i + 1, 下一层 dfs 可以重复使用位置的数字
    dfs(nums, i, target - nums[i], subset, result);
    // 此处是回溯的操作
    subset.pop();
  }
}

// test cases
let nums = [2, 3, 6, 7];
console.log(combinationSum(nums, 7));
