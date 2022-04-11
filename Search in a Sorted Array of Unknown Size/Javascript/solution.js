class Reader {
  constructor() {
    this.data = [-1, 0, 3, 5, 9, 12];
  }

  get(index) {
    return this.data[index];
  }
}

function search(reader, target) {
  let index = 0;
  let value = reader.get(index);
  if (value === target) {
    return index;
  }

  index = 1;
  while (reader.get(index) < target) {
    index = index * 2;
  }

  return binary_search(reader, 0, index, target);
}

function binary_search(reader, start, end, target) {
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (reader.get(mid) < target) {
      start = mid;
    } else if (reader.get(mid) > target) {
      end = mid;
    } else if (reader.get(mid) === target) {
      end = mid;
    }
  }

  if (reader.get(start) === target) {
    return start;
  }

  if (reader.get(end) === target) {
    return end;
  }

  return -1;
}

console.log(search(new Reader(), 9));
