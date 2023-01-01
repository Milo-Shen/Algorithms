// https://www.lintcode.com/problem/437/

const copyBooks = function (pages, k) {
  if (!pages || !pages.length) {
    return 0;
  }

  if (k === 0) {
    return -1;
  }

  let start = Math.min(...pages);
  let end = pages.reduce((a, b) => a + b);

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (get_number_of_copiers(pages, mid) <= k) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (get_number_of_copiers(pages, start) <= k) {
    return start;
  }

  return end;
};

function get_number_of_copiers(pages, limit) {
  let copiers = 0;
  let last_copied = limit;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i] > limit) {
      return Infinity;
    }

    if (last_copied + pages[i] > limit) {
      copiers++;
      last_copied = 0;
    }

    last_copied += pages[i];
  }

  return copiers;
}

const pages = [3, 2, 4];
const k = 2;
console.log(copyBooks(pages, k));
