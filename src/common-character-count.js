const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split(''),
    arr2 = s2.split(''),
    remuve = arr2;
    length1 = arr1.length,
    length2 = arr2.length,
    count = 0;

    for (let i = 0; i < length1; i += 1) {

      for (let a = 0; a < length2; a += 1) {

        if (arr1[i] === arr2[a]) {
          count += 1;
          remuve = arr2.splice(a, 1);
          break
        }
      }
    }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
