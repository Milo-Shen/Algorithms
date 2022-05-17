// https://leetcode.cn/problems/verifying-an-alien-dictionary/

function isAlienSorted(words, order) {
  if (words.length < 2) {
    return true;
  }

  // generate the number order
  let order_map = {};
  for (let i = 0, len = order.length; i < len; i++) {
    order_map[order[i]] = i;
  }

  let is_valid = false;
  for (let i = 1, len = words.length; i < len; i++) {
    let a_word = words[i - 1];
    let b_word = words[i];
    let a_len = a_word.length;
    let b_len = b_word.length;

    for (let j = 0; j < a_len && j < b_len; j++) {
      if (order_map[a_word[j]] < order_map[b_word[j]]) {
        is_valid = true;
        break;
      } else if (order_map[a_word[j]] > order_map[b_word[j]]) {
        return false;
      }
    }

    if (!is_valid) {
      if (a_len > b_len) {
        return false;
      }
    }
  }

  return true;
}

// test cases
let words = ['hello', 'leetcode'];
let order = 'hlabcdefgijkmnopqrstuvwxyz';
console.log(isAlienSorted(words, order));
