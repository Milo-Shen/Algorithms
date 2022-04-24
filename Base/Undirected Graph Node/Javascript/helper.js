function dataAdapter(data) {
  if (!data || !data.length) {
    return null;
  }

  let first = data[0];
  let result = [];
  if (first instanceof Array) {
    for (let i = 0, len = data.length; i < len; i++) {
      result.push({
        label: i + 1,
        neighbors: [...data[i]],
      });
    }
  } else {
    let temp = [];
    for (let i = 0, len = data.length; i < len; i++) {
      const current = data[i];
      if (typeof current === 'number') {
        temp.push(current);
      } else {
        const split_array = current.split('#').map(Number);
        split_array.splice(1, 0, '#');
        temp.push(...split_array);
      }
    }
    temp.push('#');
    let is_root = true;
    let node = {};
    for (let i = 0, len = temp.length; i < len; i++) {
      const current = temp[i];
      if (current === '#') {
        result.push(node);
        node = {};
        is_root = true;
      } else {
        if (is_root) {
          node.label = current;
          is_root = false;
        } else {
          node.neighbors = node.neighbors || [];
          node.neighbors.push(current);
        }
      }
    }
  }

  return result;
}

module.exports = {
  dataAdapter,
};

console.log(
  dataAdapter([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]),
);
console.log(dataAdapter([1, 2, '4#2', 1, '4#4', 1, 2]));
