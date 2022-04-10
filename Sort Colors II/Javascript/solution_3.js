// https://www.lintcode.com/problem/143/

// 采用快排的思想来解答
function sort_colors2(colors, k) {
  // empty array check
  let colors_len = colors.length;
  if (!colors || !colors_len) {
    return colors;
  }

  partition_array(colors, 0, colors_len - 1, 1, k);

  return colors;
}

function partition_array(colors, start, end, color_start, color_end) {
  if (color_start === color_end) {
    return;
  }

  let left = start;
  let right = end;

  let mid_color = Math.ceil((color_start + color_end) / 2);

  while (left <= right) {
    // 此处和 quick sort 不同的地方是, partition 必须明确得把某个数值分在某个分区内
    // 所以有一处是 <= 或 >=
    // 而 quick sort 的时候，相等时候可以位置不动，所以其实那时候有三个分区
    while (left <= right && colors[left] < mid_color) {
      left++;
    }

    while (left <= right && colors[right] >= mid_color) {
      right--;
    }

    if (left <= right) {
      let temp = colors[left];
      colors[left] = colors[right];
      colors[right] = temp;
      left++;
      right--;
    }
  }

  // 此处 left right 在退出 while 循环后，left 和 right 肯定不是指向同一个位置,
  // 所以 start...left 和 right...end 就是天然不重合的两个分区
  partition_array(colors, start, right, color_start, mid_color - 1);
  // partition 和 quick sort 还是有区别的，这å边需要是 mid + 1
  // mid + 1 的原因是需要把分区分成明确的 2 个分区
  partition_array(colors, left, end, mid_color, color_end);
}

console.log(sort_colors2([2, 1, 1, 2, 2], 2));
