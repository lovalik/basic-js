const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( array ) {

      let quantity = 0;

      for( let i = 0; i < array.length; i++ ){
          quantity = quantity + findItemInArray( array[i], '^^' );
      }

      function findItemInArray( array, itemToCount ){
          let quantity = 0;
          for ( let item of array ) {
              if ( String(item) === String(itemToCount) ){
                  ++quantity;
              }
          }
          return quantity;
      }
      return quantity;
}

module.exports = {
  countCats
};
