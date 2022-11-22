// https://leetcode.cn/problems/sorting-the-sentence/

const sortSentence = function (s) {
  let answer = [];
  let s_arr = s.split(' ');

  for (let i = 0; i < s_arr.length; i++) {
    let s = s_arr[i];
    let last_char_pos = s.length - 1;
    let pos = ~~s[last_char_pos];
    answer[pos - 1] = s.slice(0, last_char_pos);
  }

  return answer.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
