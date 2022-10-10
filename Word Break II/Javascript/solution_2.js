// https://leetcode.cn/problems/word-break-ii/
// https://www.lintcode.com/problem/582/

const wordBreak = function (s, wordDict) {};

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
