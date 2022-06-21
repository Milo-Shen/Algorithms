// https://leetcode.cn/problems/how-many-apples-can-you-put-into-the-basket/

function maxNumberOfApples(weight) {
  // 异常处理
  let weight_len = weight.length;
  if (!weight || !weight_len) {
    return 0;
  }

  // 最大可以装的苹果数量
  let total = 0;
  // 篮子承重的最大值
  let max = 5000;

  weight = weight.sort((a, b) => a - b);

  for (let i = 0; i < weight_len; i++) {
    max = max - weight[i];
    if (max >= 0) {
      total++;
    } else {
      return total;
    }
  }

  return total;
}

// test cases
let weight = [
  988, 641, 984, 635, 461, 527, 491, 610, 274, 104, 348, 468, 220, 837, 126, 111, 536, 368, 89, 201,
  589, 481, 849, 708, 258, 853, 563, 868, 92, 76, 566, 398, 272, 697, 584, 851, 302, 766, 88, 428,
  276, 797, 460, 244, 950, 134, 838, 161, 15, 330,
];
console.log(maxNumberOfApples(weight));
