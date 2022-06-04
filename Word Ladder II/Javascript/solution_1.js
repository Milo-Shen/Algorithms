// https://www.lintcode.com/problem/120/

function findLadders(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  return [];
}

function get_next_words(wordList, word) {
  let result = [];
  for (let i = 0, len = wordList.length; i < len; i++) {
    let cur_word = wordList[i];
    if (cur_word.length !== word.length) {
      continue;
    }
    let different = 0;
    for (let j = 0, j_len = word.length; j < j_len; j++) {
      if (word.charAt(j) !== cur_word.charAt(j)) {
        different++;
        if (different > 1) {
          break;
        }
      }
    }
    if (different === 1) {
      result.push(cur_word);
    }
  }
  return result;
}

// test data
let beginWord = 'hit';
let endWord = 'cog';
let wordList_1 = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(findLadders(beginWord, endWord, wordList_1));
