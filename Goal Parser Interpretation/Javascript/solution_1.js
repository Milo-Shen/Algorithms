// https://leetcode.cn/problems/goal-parser-interpretation/

const interpret = function (command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
};

// test cases
console.log(interpret('G()(al)'));
