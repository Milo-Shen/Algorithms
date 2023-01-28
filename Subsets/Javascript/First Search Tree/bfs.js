// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

function subsets(nums) {
  if (!nums) {
    return [];
  }

  let queue = [[]];
  nums = nums.sort((a, b) => a - b);

  for (let num of nums) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let subset = [...queue[i]];
      subset.push(num);
      queue.push(subset);
    }
  }

  return queue;
}

// test cases
let nums = [1, 2, 3];
console.log(subsets(nums));
