// https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/

const groupThePeople = function (groupSizes) {
  let answer = [];
  let map = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    let group_size = groupSizes[i];
    let index = findGroup(answer, map, group_size);
    if (index === -1) {
      map.set(answer.length, group_size);
      answer.push([i]);
    } else {
      answer[index].push(i);
    }
  }

  return answer;
};

function findGroup(answer, map, num) {
  if (!answer.length) {
    return -1;
  }

  for (let i = 0; i < answer.length; i++) {
    if (map.get(i) === num && answer[i].length < num) {
      return i;
    }
  }

  return -1;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
