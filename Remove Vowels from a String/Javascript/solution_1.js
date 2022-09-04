// https://leetcode.cn/problems/remove-vowels-from-a-string/

function removeVowels(s) {
  return s.replaceAll(/[a|e|i|o|u]/gi, '');
}

console.log(removeVowels('leetcodeisacommunityforcoders'));
