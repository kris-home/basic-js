const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let max = 0;
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    newStr = str.slice(0, i) + str.slice(i + 1)
    if (newStr > max) {
      max = +newStr;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
