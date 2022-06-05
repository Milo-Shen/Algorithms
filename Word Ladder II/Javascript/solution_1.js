// https://www.lintcode.com/problem/120/

function findLadders(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  // 是否已经访问过
  let result = [];
  let path = [beginWord];
  let visited = new Set();
  let min_path = { min: Infinity };

  dfs(beginWord, endWord, 1, wordList, visited, path, min_path, result);

  return result;
}

// 步骤 1: 递归的定义
function dfs(word, endWord, start_index, wordList, visited, path, min_path, result) {
  if (word === endWord) {
    let path_len = path.length;
    if (path_len < min_path.min) {
      result.length = 0;
      result.push([...path]);
    } else if (path_len === min_path.min) {
      result.push([...path]);
    }
    min_path.min = min_path.min > path_len ? path_len : min_path.min;
  }

  // 获得下一层的单词
  let next_words_list = get_next_words(wordList, word);

  for (let i = 0, len = next_words_list.length; i < len; i++) {
    let cur_word = next_words_list[i];

    if (visited.has(cur_word)) {
      continue;
    }

    visited.add(cur_word);
    path.push(cur_word);
    dfs(cur_word, endWord, start_index + 1, wordList, visited, path, min_path, result);
    path.pop();
    visited.delete(cur_word);
  }
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
