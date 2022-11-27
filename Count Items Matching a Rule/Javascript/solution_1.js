// https://leetcode.cn/problems/count-items-matching-a-rule/

const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type' && items[i][0] === ruleValue) {
      count++;
    }

    if (ruleKey === 'color' && items[i][1] === ruleValue) {
      count++;
    }

    if (ruleKey === 'name' && items[i][2] === ruleValue) {
      count++;
    }
  }

  return count;
};

// test cases
const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'phone'],
  ['phone', 'gold', 'iphone'],
];
const ruleKey = 'type';
const ruleValue = 'phone';
console.log(countMatches(items, ruleKey, ruleValue));
