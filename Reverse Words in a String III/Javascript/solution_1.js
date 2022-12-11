// https://leetcode.cn/problems/reverse-words-in-a-string-iii/

const reverseWords = function (s) {
  let s_arr = s.split(' ');
  let result = [];

  for (let i = 0; i < s_arr.length; i++) {
    let c_arr = s_arr[i].split('').reverse();
    result.push(c_arr.join(''));
  }

  return result.join(' ');
};

let s = "Let's take Apple contest";
console.log(reverseWords(s));
