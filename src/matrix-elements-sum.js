const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let row = matrix.length;
  let column = matrix[0].length;
  let result = 0;
  for (let i = 0; i < column; i += 1) {
    for (let a = 0; a < row; a += 1) {
      if (matrix[a][i] !== 0) {
        result += matrix[a][i];
      }
      else {
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
