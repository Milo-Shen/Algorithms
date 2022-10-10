// https://leetcode.cn/problems/word-break-ii/
// https://www.lintcode.com/problem/582/

// 思考: 这个算法中是否也可以使用 index, 不使用 index 只是因为没有把完整的 s 往下传而已 ?
const wordBreak = function (s, wordDict) {
  // 特殊情况处理
  // 如果字符串为 null 或空, 则返回 true
  if (!s || !wordDict) {
    return [];
  }

  // 寻找最长的单词长度
  let { max_word_len, word_dict } = get_max_word_len(wordDict);

  return dfs(s, max_word_len, word_dict, new Map());
};

// 递归三要素之一: 递归的定义
// 找到 s 的所有切割方案并 return
function dfs(s, max_word_len, word_dict, memo) {
  // 如果 s 之前被计算过, 直接返回结果
  if (memo.has(s)) {
    return memo.get(s);
  }

  // 递归要素之三: 递归的出口
  // 已经划到 s 的末尾 ( 之前划分的词全部在 dict 里 ), []
  if (s.length === 0) {
    return [];
  }

  // 单词的划分
  let partitions = [];

  // 递归要素之二: 递归的拆解
  // 枚举下一个划分的字符串终点 ( exclusive ), 分治解决每个子问题
  for (let prefix_len = 1; prefix_len <= s.length; prefix_len++) {
    // 剪枝: 如果 prefix_len 大于最大单词长度, 则前缀词不可能出现在字典里, 直接退出
    if (prefix_len > max_word_len) {
      break;
    }

    // 得到 s 的前缀词, 因为从 0 开始, 这里 substring 和 substr 等价
    let prefix = s.substring(0, prefix_len);

    // 如果这个前缀词没有在 dict 中, 本次划分不可行, 尝试其他方案
    if (!word_dict.has(prefix)) {
      continue;
    }

    // 递归继续探求 s的剩余部分划分成为 dict 里单词的组合的方案
    let sub_partitions = dfs(s.substring(prefix_len), max_word_len, word_dict, memo);
    for (let partition of sub_partitions) {
      partitions.push(prefix + ' ' + partition);
    }
  }

  // 如果 s 也在词典中, 也是一种方案
  if (word_dict.has(s)) {
    partitions.push(s);
  }

  memo.set(s, partitions);
  return partitions;
}

// 获取最长的单词长度
function get_max_word_len(wordDict) {
  let max_word_len = -Infinity;
  let word_dict = new Set();
  for (let word of wordDict) {
    word_dict.add(word);
    max_word_len = max_word_len < word.length ? word.length : max_word_len;
  }
  return { max_word_len, word_dict };
}

// test cases
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
