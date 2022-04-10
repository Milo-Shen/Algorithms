// https://www.lintcode.com/problem/143/

// 采用计数排序的思想来解答
function sort_colors2(colors, k) {
  // 统计每个数字出现的次数
  let count = [];
  for (let i = 0, len = colors.length; i < len; i++) {
    count[colors[i]] = (count[colors[i]] || 0) + 1;
  }

  // 重新排序
  let index = 0;
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < count[i]; j++) {
      colors[index] = i;
      index++;
    }
  }

  return colors;
}

console.log(sort_colors2([3, 2, 2, 1, 4], 4));
