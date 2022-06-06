// https://www.lintcode.com/problem/120/

function findLadders(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return [];
  }

  // 若是 beginWord 不在 wordList 中，则加入 wordList 中
  if (!wordList.find((x) => x === beginWord)) {
    wordList.push(beginWord);
  }

  // 若是 endWord 不在 wordList 中，则加入 wordList 中
  if (!wordList.find((x) => x === endWord)) {
    wordList.push(endWord);
  }

  // 记录从起点开始, 到达某个词的最短路径长度
  let distance = new Map();

  // 记录从某一个词开始, 可以到达的不绕远的下一个词的集合
  let fromToMap = new Map();

  // 初始化 fromToMap
  for (let i = 0, len = wordList.length; i < len; i++) {
    fromToMap.set(wordList[i], []);
  }

  bfs(fromToMap, distance, beginWord, endWord, wordList);

  // 是否已经访问过
  let result = [];
  let path = [beginWord];
  let visited = new Set();
  let min_path = { min: Infinity };

  dfs(result, path, beginWord, endWord, fromToMap, distance.get(endWord));

  return result;
}

function dfs(result, path, cur_word, end, fromToMap, min_len) {
  // 如果当前路径已经等于起点到终点的最短路径长度了，没有必要走下去了，直接返回
  if (path.length === min_len + 1) {
    return;
  }

  path.push(cur_word);
}

function bfs(fromToMap, distance, start, end, dict) {
  distance.set(start, 0);
  let queue = [start];

  while (queue.length) {
    let cur_word = queue.shift();
    let next_word_list = get_next_words(cur_word, dict);
    for (let i = 0, len = next_word_list.length; i < len; i++) {
      let next_word = next_word_list[i];
      // 如果 next 没出现过, 或者在当前层出现过
      // 1. 那么 cur_word 可以到 next word, 加入 fromToMap
      // 2. 记录从起点开始，到达某个词的最短路径长度
      // 3. 入队, 在下一层中进行遍历查找 next word 可以到达的点
      if (!distance.has(next_word)) {
        fromToMap.get(cur_word).add(next_word);
        distance.set(next_word, distance.get(cur_word) + 1);
        queue.push(next_word);
      }
      // 如果 next_word 在当前层出现过
      // 如果 cur_word 可以到 next_word, 加入 fromToMap
      else if (distance.get(next_word) === distance.get(cur_word) + 1) {
        fromToMap.get(cur_word).add(next_word);
      }
    }
  }
}

// 步骤 1: 递归的定义
function _dfs(word, endWord, start_index, wordList, visited, path, min_path, result) {
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

    if (visited.has(cur_word) || start_index + 1 > min_path.min) {
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
