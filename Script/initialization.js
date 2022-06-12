const fs = require('fs');
const path = require('path');

function walk(path) {
  const dirList = fs.readdirSync(path);
  return dirList.filter((x) => !x.includes('.')).length;
}

console.log(walk(path.dirname(__dirname)));
