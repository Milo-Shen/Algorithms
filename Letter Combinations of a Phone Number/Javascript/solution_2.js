// https://www.lintcode.com/problem/425
// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/submissions/

let digital_phone = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  let depth = digits.length;
  let digits_array = digits.split('');
  let result = [];
  dfs(digits_array, 0, [], result, depth);
  return result;
}

function dfs(digits_array, index, answer, result, depth) {
  if (index === depth) {
    result.push(answer.join(''));
    return result;
  }

  let letter_list = digital_phone[digits_array[index]];
  for (let i = 0, len = letter_list.length; i < len; i++) {
    let letter = letter_list[i];
    answer.push(letter);
    dfs(digits_array, index + 1, answer, result, depth);
    answer.pop();
  }
}

// test cases
console.log(letterCombinations('23'));
