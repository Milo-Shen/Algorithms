// https://www.lintcode.com/problem/458

// 最后一次出现的位置
function binary_search(nums, target) {
  // 对数组进行空值检查
  let nums_len = nums.length;
  if (!nums || nums_len === 0) {
    return -1;
  }

  let start = 0;
  let end = nums_len - 1;

  // 要点 1: start + 1 < end
  // 在二分问题中，最常见的错误就是死循环。而这个模版一定不会出现死循环。为什么呢 ?
  // 因为我们这边使用了 `start + 1 < end`, 而不是 `start < end` 或者 `start <= end`
  // 通过 `while` 循环，将区间范围从 `n` 缩小到 `2` （只有 `start` 和 `end` 两个点）。
  // 在 `start` 和 `end` 中判断是否有解。
  // 而普通的 `start < end` 或者 `start <= end` 在寻找目标最后一次出现的位置的时候，可能出现死循环。
  while (start + 1 < end) {
    // 要点 2: start + (end - start) / 2
    // 这个做法是防止在 start = 2^31 - 1, end = 2^31 - 1 的情况下出现加法 overflow
    let mid = start + Math.floor((end - start) / 2);
    // 要点 3: =, <, > 分开讨论, mid 不 +1 也不 -1
    // > , =, < 的逻辑先分开写，然后在看看 = 的情况是否能合并到其他分支里
    if (nums[mid] === target) {
      // 如果是随机找一个复合 target 的 index 可以直接 return mid
      // return mid;
      // 如果要找第一个位置，则 end = mid;
      start = mid;
    } else if (nums[mid] < target) {
      // 大部分时候，`mid` 是可以 `+1` 和 `-1` 的。在一些特殊情况下，比如寻找目标的最后一次出现的位置时，
      // 当 `target` 与 `nums[mid]` 相等的时候，是不能够使用 `mid + 1` 或者 `mid - 1` 的。因为会导致漏掉解。
      // 那么为了节省脑力，统一写成 `start = mid / end = mid` 并不会造成任何解的丢失，并且也不会损失效率
      // 因为 `log(n)` 和 `log(n+1)` 没有区别。
      start = mid;
    } else {
      end = mid;
    }
  }

  // 要点 4: 循环结束后，单独处理 start 和 end
  // 因为上面的循环退出条件是 start + 1 < end
  // 因此这里循环结束的时候，start 和 end 的关系是相邻关系（1 和 2，3 和 4 这种）
  // 因此需要再单独判断 start 和 end 这两个数谁是我们要的答案
  // 如果是找 first position of target 就先看 start，否则就先看 end
  if (nums[end] === target) {
    return end;
  }

  if (nums[start] === target) {
    return start;
  }

  return -1;
}

console.log(binary_search([4, 5, 9, 9, 12, 13, 14, 15, 15, 18], 9));
