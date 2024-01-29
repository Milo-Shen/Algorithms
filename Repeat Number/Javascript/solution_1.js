const repeatNumber = function (str) {
  let result = '';

  for (let i = 0; i < str.length; i += 2) {
    let char = str[i];
    let count = parseInt(str[i + 1]);

    for (let j = 0; j < count; j++) {
      result += char;
    }
  }

  return result;
};

console.log(repeatNumber('a2c4'));
