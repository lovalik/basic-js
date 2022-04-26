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
function getMatrixElementsSum( matrix ) {
  // throw new NotImplementedError('Not implemented');
  let sum = 0;

    for( let i = 0; i < matrix.length; i++ ){
        sum += sumNumbers( matrix, i );
    }

    function sumNumbers( initArray, index ){
        let sum = 0;

        for( let i = 0; i < initArray[index].length; i++ ){
            if( index === 0 ){
                sum += initArray[index][i];
            } else if( initArray[ index - 1 ][ i ] !== 0 ){
                sum += initArray[index][i];
            } else {
                continue;
            }
        }

        return sum;
    }
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
