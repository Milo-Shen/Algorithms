// https://leetcode.cn/problems/compare-version-numbers/description/
const compareVersion = function (version1, version2) {
  let v1_list = version1.split('.');
  let v2_list = version2.split('.');

  let v1_len = v1_list.length;
  let v2_len = v2_list.length;

  let len = Math.max(v1_len, v2_len);

  for (let i = 0; i < len; i++) {
    let cur_v1_num = ~~v1_list[i];
    let cur_v2_num = ~~v2_list[i];

    if (cur_v1_num > cur_v2_num) {
      return 1;
    }

    if (cur_v1_num < cur_v2_num) {
      return -1;
    }
  }

  return 0;
};

console.log(compareVersion('1', '1.1'));
