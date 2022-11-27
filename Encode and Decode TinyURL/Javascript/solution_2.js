// https://leetcode.cn/problems/encode-and-decode-tinyurl/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
  this.dataBase = new Map();
  this.id = 0;
  this.id++;
  this.dataBase.set(this.id, longUrl);
  return 'https://tinyurl.com/' + this.id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
  const p = shortUrl.lastIndexOf('/') + 1;
  const key = parseInt(shortUrl.substring(p));
  return this.dataBase.get(key);
};
